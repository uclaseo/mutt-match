angular.module('mutt-match')

  .controller('addDogCtrl', ['$scope', 'shelterService', '$state', function($scope, shelterService, $state) {
    vm = this;
    
    vm.addDogClick = () => {
      vm.addDogData = {
        name: vm.addDogData.name,
        age: vm.addDogData.age,
        breed: vm.addDogData.breed,
        active: vm.addDogData.active,
        grooming: vm.addDogData.grooming,
        size: vm.addDogData.size,
        noise: vm.addDogData.noise,
        experienceReq: vm.addDogData.experience,
        childFriendly: vm.addDogData.childFriendly,
        dogFriendly: vm.addDogData.dogFriendly,
        petFriendly: vm.addDogData.petFriendly
      };
      shelterService.addDog(vm.addDogData)
      .then((result) => {
        console.log('success adding dog ', result);
        $state.go('questionnaire');
      })
      .catch((err) => {
        console.error('error adding dog ', err);
      })
    }
    
}]);
