angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', 'store', 'matchesService', function(questionnaireService, userService, $log, $state, store, matchesService) {  
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
    console.log(store.get('profile').userInfo.data.id)
    this.questionnaireData.name = this.questionnaireData.firstName + " " + this.questionnaireData.lastName
    this.questionnaireData.petExperience = !this.questionnaireData.petExperience ? false : true;
    this.questionnaireData.children = !this.questionnaireData.children ? false : true;
    this.questionnaireData.currentDogs = !this.questionnaireData.currentDogs ? false : true;
    this.questionnaireData.currentPets = !this.questionnaireData.currentPets ? false : true;

    var id = store.get('profile').userInfo.data.id;
    console.log(id)

    questionnaireService.update(id, this.questionnaireData)
    .then((user) => {
      var userData = user.config.data;
      matchesService.getDogs()
      .then((dogs) => {
        //console.log('allDogs Array: ' , dogs.data)
        var dogsArray = dogs.data;
        //console.log('userData:' , userData)
        dogsArray.forEach(function(dog) {
          var sum = 0;
          sum += Math.abs(dog.active - userData.active)
          sum += Math.abs(dog.size - userData.size)
          sum += Math.abs(dog.noise - userData.noise)
          sum += Math.abs(dog.grooming - userData.grooming)

          if(dog.childFriendly !== userData.children) {
            sum += 2;
          }
          if(dog.petFriendly !== userData.currentPets) {
            sum += 2;
          }
          if(dog.experienceReq !== userData.petExperience) {
            sum += 2;
          }
          if(dog.dogFriendly !== userData.currentDogs) {
            sum += 2;
          }

          var score = Math.round(100 - (sum * 100 / 24))
          dog.score = score;
        })

        dogsArray.sort(function (dog1, dog2) {
          return dog2.score - dog1.score;
        })
    
        console.log(dogsArray)

        for(var i = 0; i < 5; i++) {
          userService.insertUserDogMatches(dogsArray[i])
        }
      })
      .then(() => {
        $state.go('matches');
      })

    })
    .catch(error => {
      console.error(error);
      $state.go('questionnaire');
    });
  };
 }]);
