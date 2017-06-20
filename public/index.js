angular.module('mutt-match', ['ui.router'])

.config(['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider) {

  $urlServiceProvider.rules.otherwise({ state: 'home' });
  $stateProvider.state('home', {
    url: '/',
    component: 'home'
  });
  $stateProvider.state('questionnaire', {
    url: '/questionnaire',
    component: 'questionnaire'
  });
}]);