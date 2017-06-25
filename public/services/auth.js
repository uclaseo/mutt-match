"use strict";

angular.module('mutt-match')

.service('authService', [ '$state', '$timeout', '$location', 'lock', '$http', function($state, $timeout, $location, lock, $http) {

  this.login = () => lock.show();

  this.handleAuthentication = () => {
    lock.interceptHash();
    var auth = this;
    lock.on('authenticated', function(authResult) {
      console.log('auth results', authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        $state.go('callback');
        auth.setSession(authResult);
      }
    });
    lock.on('authorization_error', function(err) {
      $state.go('home');
      console.log(err);
      alert('Error: ' + err.error + '. Check the console for further details.');
    });
  };

  this.setSession = (authResult) => {
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        $state.go('home');
        console.log('failed login');
      }

      var profile = {
        email: profile.email,
        googleId: profile.sub,
        name: profile.name
      };

      $http.post(`/users`, profile)
      .then(user => {
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('profile', JSON.stringify(user.data[0]));
        $timeout(
          () => {
            if (user.data[1]) $state.go('questionnaire');
            else $state.go('matches');
          },
          3000
        )
      })
      .catch(error=> console.log(error));
    });
  };

  this.logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    $state.go('home');
  };

  this.isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };
}]);