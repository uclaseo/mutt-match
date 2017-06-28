angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', function(questionnaireService, userService, $log, $state) {  

  this.submit = () => {
    var userInfo = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      city: this.user.city,
      zipCode: this.user.postalCode,
    }
    
    //$state.go('fetching');
    let user = localStorage.getItem('profile');
    console.log(user)
    questionnaireService.update(user, this.questionnaireData)
      .then(user => {
        console.log(user) //wtf nothing here
        localStorage.setItem('profile', user.data);
        $state.go('matches');
      })
      .catch(error => {
        console.error(error);
        $state.go('questionnaire');
      });
  };
 }]);
