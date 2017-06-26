angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', function(questionnaireService, userService, $log, $state) {  

  this.submit = () => {
    $state.go('fetching');
    let user = JSON.parse(localStorage.getItem('profile'));
    questionnaireService.update(user, this.questionnaireData)
      .then(user => {
        localStorage.setItem('profile', user.data);
        $state.go('matches');
      })
      .catch(error => {
        console.error(error);
        $state.go('questionnaire');
      });
  };
 }]);
