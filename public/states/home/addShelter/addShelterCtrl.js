angular.module('mutt-match')

  .controller('addShelterCtrl', ['shelterService', 'store', '$state', function(shelterService, store, $state) {
    vm = this;
    vm.userId = store.get('profile').userInfo.data[0].id;

    vm.shelterClick = () => { 
      let shelterData = {
        name: vm.shelterData.name,
        address: vm.shelterData.address
      };
      shelterService.addShelter(vm.userId, shelterData)
      .then((results) => {
        console.log('results from posting shelter ', results);
        // shelterService.set('id', results.data.id);
        $state.go('addDog');
      })
      .catch((err) => {
        console.error('error adding shelter ', err);
      })
    }


}]);