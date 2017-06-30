angular.module('mutt-match')
.controller('messageEntryCtrl', function() {
  const vm = this;
  vm.click = click;
  vm.isTrue = false;

  function click() {
    console.log('click');
    vm.isTrue = !vm.isTrue;
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