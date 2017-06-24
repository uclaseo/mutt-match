angular.module('mutt-match')

.component('questionnaire', {
  bindings: {
    submit: '<'
  },
  controller: 'QuestionnaireCtrl',
  restrict: 'E',
  templateUrl: './states/questionnaire/questionnaire.html'
});