angular.module('mutt-match')

.component('questionnaire', {
  bindings: {
    questionnaireData: '<'
  },
  controller: 'QuestionnaireCtrl',
  restrict: 'E',
  templateUrl: './states/questionnaire/questionnaire.html'
});