(function () {

  'use strict';

  angular.module('mutt-match')
  
  .run([ 'auth', function(auth) {
    auth.handleAuthentication();
  }]);
  
})();