angular.module('mutt-match')

.component('home', {
  bindings: {
    login: '<',
    isAuthenticated: '<'
  },
  controller: 'HomeCtrl',
  templateUrl: './states/home/home/home.html'
});