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

  this.submit = () => { 
    this.questionnaireData.petExperience = !this.questionnaireData.petExperience ? false : true;
    this.questionnaireData.children = !this.questionnaireData.children ? false : true;
    this.questionnaireData.currentDogs = !this.questionnaireData.currentDogs ? false : true;
    this.questionnaireData.currentPets = !this.questionnaireData.currentPets ? false : true;

    console.log(this.questionnaireData)
    this.questionnaireData.email = store.get('profile').email;
    // let user = localStorage.getItem('profile');
    // console.log(JSON.stringify(user))
    userService.getUserIdFromEmail()
    .then((user) => {
      questionnaireService.update(user.data.results.id, this.questionnaireData)
      .then((user) => {
        console.log(user) 
        $state.go('matches');
      })
      .catch(error => {
        console.error(error);
        $state.go('questionnaire');
      });
    })
  };
 }]);
