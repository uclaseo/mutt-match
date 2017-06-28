(function() {
  'use strict';
  angular
    .module('mutt-match', ['auth0', 'angular-storage', 'angular-jwt', 'ui.router'])
    .run(function($rootScope, auth, store, jwtHelper, $location) {

      $rootScope.$on('$locationChangeStart', function() {
        var token = store.get('id_token');
        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            if (!auth.isAuthenticated) {
              auth.authenticate(store.get('profile'), token);
            }
          }
        } else {
          $location.path('/');
        }
      })
      
    });
})();
