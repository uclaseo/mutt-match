angular.module('mutt-match', ['ui.router'])

.config(['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider) {

  $urlServiceProvider.rules.otherwise({ state: 'questionnaire' });
  $stateProvider.state('questionnaire', {
    url: '/',
    component: 'questionnaire'
  });
}]);