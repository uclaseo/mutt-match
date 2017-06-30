angular.module('mutt-match')
.controller('shelterEntryCtrl', ['messageService', function(messageService) {
  const vm = this;
  vm.isTrue = false;
  vm.showText = showText;
  vm.sendMessage = sendMessage;


  function showText() {
    vm.isTrue = !vm.isTrue;
  }
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


  function sendMessage(text, to) {
    console.log('send', text);
    console.log('to', to);
    vm.text = '';
    messageService.sendMessage(text, to)
    .then((response) => {
      console.log('messageEntry sendMessage success', response);
    })
    .catch((error) => {
      console.log('messageEntry sendMEssage fail', error);
    });
  };




}])
.directive('shelterEntry', function() {
  return {
    scope: {
      shelter: '<',
      messages: '<'
    },
    controller: 'shelterEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: './states/home/message/shelterEntry.html'
  }
})