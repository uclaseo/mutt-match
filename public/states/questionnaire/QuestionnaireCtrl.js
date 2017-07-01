angular.module('mutt-match')

 .controller('QuestionnaireCtrl', ['questionnaireService','userService', '$log', '$state', 'store', 'matchesService', function(questionnaireService, userService, $log, $state, store, matchesService) {  

  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('cityName'), {
      types: ['(cities)']
    }
  );

  this.submit = () => { 

    var id = store.get('profile').userInfo.data[0].id;
    console.log(id)
    //delete previous data if exists
    matchesService.deleteMatches(id)
    .then((deleted) => {
      console.log(deleted)
      this.questionnaireData.name = this.questionnaireData.firstName + " " + this.questionnaireData.lastName
      this.questionnaireData.petExperience = !this.questionnaireData.petExperience ? false : true;
      this.questionnaireData.children = !this.questionnaireData.children ? false : true;
      this.questionnaireData.currentDogs = !this.questionnaireData.currentDogs ? false : true;
      this.questionnaireData.currentPets = !this.questionnaireData.currentPets ? false : true;
      this.questionnaireData.currentAlone = !this.questionnaireData.currentAlone ? false : true;
      this.questionnaireData.currentWeather = !this.questionnaireData.currentWeather ? false : true;

      questionnaireService.update(id, this.questionnaireData)
      .then((user) => {
        var userData = user.config.data;
        matchesService.getDogs()
        .then((dogs) => {
          var dogsArray = dogs.data;

          dogsArray.forEach(function(dog) {
            var sum = 0;
            sum += Math.abs(dog.active - userData.active) * 2;
            sum += Math.abs(dog.size - userData.size) * 2.5;
            sum += Math.abs(dog.noise - userData.noise) * 2;
            sum += Math.abs(dog.grooming - userData.grooming) * 1.5;
            sum += Math.abs(dog.age - userData.currentAge * 2);

            if(dog.childFriendly !== userData.children) {
              sum += 3;
            }
            if(dog.petFriendly !== userData.currentPets) {
              sum += 2;
            }
            if(dog.experienceReq !== userData.petExperience) {
              sum += 2.25;
            }
            if(dog.dogFriendly !== userData.currentDogs) {
              sum += 1.5;
            }
            if(dog.aloneFriendly !== userData.currentAlone) {
              sum += 3.5;
            }
            if(dog.weatherFriendly !== userData.currentWeather) {
              sum += 2.5;
            }

            var score = Math.round(100 - (sum * 100 / 52.75))
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
    })
  };
 }]);
