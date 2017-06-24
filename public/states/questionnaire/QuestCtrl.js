angular.module('mutt-match', /*['ngMaterial']*/)

.controller('QuestCtrl', [function() {

  this.active = {
    val1: true
  },
  this.nonActive = {
    val1: false
  };
  /*this.showPrompt = function(ev) {
    var confirm = $mdDialog.prompt()
      .title('Are you an active person?')
      .targetEvent(ev)
      .ok('Pretty active')
      .cancel('Not so much');

      $mdDialog.show(confirm).then(() => {
        this.status = 'Active is good for dogs!';
      }, function() {
        this.status = 'No sweat for you!';
      });
  };*/
}]);
  // .config(function($mdThemingProvider) {

  //   // Configure a dark theme with primary foreground yellow

  //   $mdThemingProvider.theme('docs-dark', 'default')
  //     .primaryPalette('yellow')
  //     .dark();

  // });