angular.module('mutt-match')

.controller('FetchingCtrl', ['$state', '$timeout', function($state, $timeout) {

  $timeout(() => $state.go('matches'), 5000);

}]);
