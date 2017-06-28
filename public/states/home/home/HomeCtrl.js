angular.module('mutt-match')

.controller('HomeCtrl', ['auth', 'store', '$location',
  function(auth, store, $location) {
    var vm = this;
    vm.login = login;

      function login() {
        auth.signin({}, function(profile, token) {
          store.set('profile', profile);
          store.set('id_token', token);
          $location.path('/questionnaire');
          console.log('this is profile upon login', store.get('profile'));
        }, function(error) {
          console.log('login error', error);
        });
      };
      
}]);
