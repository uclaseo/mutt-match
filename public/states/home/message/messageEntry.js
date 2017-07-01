angular.module('mutt-match')
.controller('messageEntryCtrl', ['messageService', function(messageService) {
  const vm = this;
  vm.click = click;
  vm.sendMessage = sendMessage;
  vm.getHistory = getHistory;
  vm.isTrue = false;
  vm.text;
  vm.history = [];

  function click() {
    console.log('click');
    vm.isTrue = !vm.isTrue;
  };

  function sendMessage(text, to, chatId) {
    console.log('send', text);
    console.log('to', to);
    console.log('chatId', chatId);
    vm.text = '';
    messageService.replyMessage(text, to, chatId)
    .then((response) => {
      console.log('messageEntry sendMessage success', response);
    })
    .catch((error) => {
      console.log('messageEntry sendMEssage fail', error);
    });
    console.log('VM.MESSAGE', vm.message.id);
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

  function getHistory() {
    console.log('hello');
    messageService.getMessageHistory(vm.message.id)
    .then(response => {
      console.log('FINALLY HISTORYYYYYYY', response);
      for (var i = 0; i < response.data.length; i++) {
        vm.history.push(response.data[i].messages);
      }
      console.log('FINALLLL HISTORY MESSSSSAGE', vm.history);
    })
  }
}])
.directive('messageEntry', function() {
  return {
    scope: {
      message: '<'
    },
    controller: 'messageEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: './states/home/message/messageEntry.html'
  }
})