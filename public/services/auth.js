"use strict";

angular.module('mutt-match')

.service('authService', [ '$state', '$timeout', '$location', 'lock', function($state, $timeout, $location, lock) {
  return {
    login: () => lock.show(),
    handleAuthentication: () => {
      lock.on('authenticated', function(authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          setSession(authResult);
          $state.go('callback');
        }
      });
      lock.on('authorization_error', function(err) {
        $state.go('callback');
        console.log(err);
        alert('Error: ' + err.error + '. Check the console for further details.');
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
      $state.go('home');
    },
    isAuthenticated: () => {
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  };
}]);