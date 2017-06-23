angular.module('mutt-match')

.controller('MatchesCtrl', ['matchService', function(matchService) {

  matchService.getMatches();

}]);
