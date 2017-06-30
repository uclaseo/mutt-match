angular.module('mutt-match')

.controller('HomeCtrl', ['auth', 'store', '$location', 'userService',
  function(auth, store, $location, userService) {
    var vm = this;
    vm.login = login;

      function login() {
        auth.signin({}, function(profile, token) {
          store.set('profile', profile);
          store.set('id_token', token);
          $location.path('/questionnaire');
          userService.registerUser(profile);
          console.log('this is profile upon login', store.get('profile'));
        }, function(error) {
          console.log('login error', error);
        });
      };
      
}]);
