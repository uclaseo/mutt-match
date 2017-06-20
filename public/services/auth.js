"use strict";

angular.module('mutt-match')

.service('auth', [ '$state', 'angularAuth0', '$timeout', function($state, angularAuth0, $timeout) {
  return {
    login: () => angularAuth0.authorize(),
    handleAuthentication: () => {
      angularAuth0.parseHash()
      .then(authResult => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          setSession(authResult);
          $state.go('home');
        }
      })
      .catch(error => {
        $timeout(function() {
          $state.go('home');
        });
        console.log(error);
      });
    },
    setSession: (authResult) => {
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    },
    logout: () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
    },
    isAuthenticated: () => {
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  };
}]);