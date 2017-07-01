angular.module('mutt-match')
.controller('messageCtrl', ['messageService', 'shelterService', function(messageService, shelterService) {
  const vm = this;
  vm.renderMessages = renderMessages;
  vm.getShelters = getShelters;
  vm.getMessageHistory = getMessageHistory;
  vm.messages = [];
  vm.shelters = [];
  vm.isTrue = false;

  function renderMessages() {
    vm.isTrue = !vm.isTrue;
    messageService.getMessages()
    .then((response) => {
      console.log('hello', response);
      for (var i = response.data.length - 1; i >= 0; i--) {
        vm.messages.push(response.data[i]);
      }
      console.log(vm.messages);

      var messageIds = [];
      for (var j = 0; j < response.data.length; j++) {
        messageIds.push(response.data[j].id);
        console.log(messageIds);
      }

      messageService.getMessageHistory(messageIds)





    })
    .catch((error) => {
      console.log('error', error);
    })
  };
  vm.openDialog = function($event) {
    $mdDialog.show({
      controller: DialogCtrl,
      controllerAs: 'ctrl',
      templateUrl: 'dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose:true
    });
  };

  function getShelters() {
    shelterService.getAllShelters()
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        vm.shelters.push(response.data[i]);
      }
      // vm.shelters = response;
    })
  }

  function getMessageHistory() {
    console.log('hi');
    messageService.getMessageHistory()
  }
}])