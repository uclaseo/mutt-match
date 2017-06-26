angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', function(questionnaireService, userService, $log, $state) {  

  this.submit = () => {
    $state.go('fetching');
    questionnaireService.update(user, this.questionnaireData)
      .then(user => {
        let user = JSON.parse(localStorage.getItem('profile'));
        localStorage.setItem('profile', user.data);
        $state.go('matches');
      })
      .catch(error => {
        console.error(error);
        $state.go('questionnaire');
      });
  };
 }]);
