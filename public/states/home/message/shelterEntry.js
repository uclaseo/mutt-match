angular.module('mutt-match')
.controller('shelterEntryCtrl', function() {

})
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