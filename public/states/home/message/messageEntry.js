angular.module('mutt-match')
.controller('messageEntryCtrl', function() {
  const vm = this;
  vm.click = click;
  vm.sendMessage = sendMessage;
  vm.isTrue = false;
  vm.text;

  function click() {
    console.log('click');
    vm.isTrue = !vm.isTrue;
  }

  function sendMessage(text) {
    console.log('send', text);
    vm.text = '';
  }
})
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