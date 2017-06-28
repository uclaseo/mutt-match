angular.module('mutt-match')

.controller('LogoutCtrl', ['auth', 'store', '$location', 
function(auth, store, $location) {
  var vm = this;
  vm.logout = logout;

  function logout() {
    console.log('fuck this');
        store.remove('profile');
        store.remove('id_token');
        auth.signout();
        $location.path('/');
  }

}]);
