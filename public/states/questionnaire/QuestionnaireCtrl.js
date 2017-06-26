angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', function(questionnaireService, userService, $log) {
   this.questionnaireData = {
     active: '',
     grooming: '',
     dogSize: '',
     noise: '',
     experience: ''
   };

  $log.log('questionnaireService in QuestionnaireCtrl', questionnaireService.update(userService.get(this.userData)));
   this.onClick = () => {
     $log.log('inside click function QuestionnaireCtrl');
     questionnaireService.update(userService.get(), this.userData)
   }

 }]);
