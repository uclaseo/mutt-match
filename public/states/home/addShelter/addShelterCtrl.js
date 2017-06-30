angular.module('mutt-match')

  .controller('addShelterCtrl', ['shelterService', 'store', '$state', function(shelterService, store, $state) {
    vm = this;
    vm.userId = store.get('profile').userInfo.data[0].id;

    vm.shelterClick = () => { 
      vm.shelterData = {
        name: vm.shelterData.name,
        address: vm.shelterData.address
      };
      console.log('this is the user id ', vm.userId);
      console.log('this is the shelter data ', vm.shelterData);
      shelterService.addShelter(vm.userId, vm.shelterData)
      .then((results) => {
        console.log('results from posting shelter ', results);
        shelterService.shelterId = results.data.id;
        console.log('shelter service id ', shelterService.shelterId); 
        $state.go('addDog');
      })
      .catch((err) => {
        console.error('error adding shelter ', err);
      })
    }


}]);