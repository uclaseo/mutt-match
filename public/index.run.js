(function () {

  'use strict';

  angular.module('mutt-match')
  
  .run([ 'authService', function(authService) {
    authService.handleAuthentication();
  }]);
  
})();