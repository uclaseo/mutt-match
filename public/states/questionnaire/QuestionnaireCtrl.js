angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', 'store', function(questionnaireService, userService, $log, $state, store) {  
  // if(store.get('profile').email) {
  //   questionnaireService.getUserInfo(store.get('profile').email)
  //   .then(userInfo => {
  //     console.log(userInfo)
  //   })
  // }



  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('cityName'), {
      types: ['(cities)']
    }
  );



  this.submit = () => { //gonna do a lot of shit 
    console.log(this.questionnaireData)
    this.questionnaireData.email = store.get('profile').email;
    // let user = localStorage.getItem('profile');
    // console.log(JSON.stringify(user))
    questionnaireService.createUserInfo(this.questionnaireData)
      .then(user => {
        console.log(user) 
        // localStorage.setItem('profile', user.data);
        // $state.go('matches');
      })
      .catch(error => {
        console.error(error);
        $state.go('questionnaire');
      });
  };
 }]);
