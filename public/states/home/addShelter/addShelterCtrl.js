angular.module('mutt-match')

  .controller('addShelterCtrl', ['shelterService', 'store', '$state', function(shelterService, store, $state) {
    vm = this;
    vm.userId = store.get('profile').userInfo.data.id;

    vm.shelterClick = () => { 
      let shelterData = {
        name: vm.shelterData.name,
        address: vm.shelterData.address
      };
      shelterService.addShelter(vm.userId, shelterData)
      .then(() => {
        $state.go('addDog');
      })
      .catch((err) => {
        console.error('error adding shelter ', err);
      })
    }


}]);