angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', function(questionnaireService, userService, $log, $state) {
   this.questionnaireData = {
     active: '',
     grooming: '',
     dogSize: '',
     noise: {
       yes: true,
       no: false
     },
     experience: {
       yes: true,
       no: false
     }
   };

  $log.log('questionnaireService in QuestionnaireCtrl', questionnaireService.update(userService.get(this.userData)));

  this.submit = () => {
    let user = localStorage.getItem('profile');
    $log.log('inside submit of questionnaireCtrl', questionnaireService);
    questionnaireService.update(user, this.userData)
      .then(user => {
        localStorage.setItem('profile', user.data);
        $state.go(MatchesCtrl.matches);
      })
      .catch(error => console.error(error));
  }
  //  this.onClick = () => {
  //    $log.log('inside click function QuestionnaireCtrl');
  //    questionnaireService.update(userService.get(), this.userData)
  //  }

 }]);
