angular.module('mutt-match')

.controller('CallbackCtrl', ['authService',function(authService) {
  this.$onInit = () => {
  };
    console.log('callback rendered');
    authService.handleAuthentication();
}]);
