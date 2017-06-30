angular.module('mutt-match')
.controller('messageCtrl', ['messageService', 'shelterService', function(messageService, shelterService) {
  const vm = this;
  vm.renderMessages = renderMessages;
  vm.messages = [];
  vm.shelters = [];
  vm.getShelters = getShelters;

  function renderMessages() {
    messageService.getMessages()
    .then((response) => {
      console.log('hello', response);
      for (var i = response.data.length - 1; i >= 0; i--) {
        vm.messages.push(response.data[i]);
      }
      console.log(vm.messages);
    })
    .catch((error) => {
      console.log('error', error);
    })
  };

  function getShelters() {
    shelterService.getAllShelters()
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        vm.shelters.push(response.data[i].name);
      }
      // vm.shelters = response;
      console.log('SHELTERS', vm.shelters.data);

    })
  }
}])