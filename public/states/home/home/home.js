angular.module('mutt-match')

.component('home', {
  bindings: {
    login: '<'
  },
  controller: 'HomeCtrl',
  restrict: 'E',
  templateUrl: './states/home/home/home.html'
});