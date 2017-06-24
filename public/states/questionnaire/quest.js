angular.module('mutt-match')

.component('questionnaire', {
  bindings: {
    submit: '<'
  },
  controller: 'QuestCtrl',
  restrict: 'E',
  templateUrl: './states/questionnaire/quest.html'
});