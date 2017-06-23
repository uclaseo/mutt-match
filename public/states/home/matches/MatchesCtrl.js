angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'getMatches', function('$log', 'getMatches') {
  let matches = [];

  $log('!!!!!', matches);
  matches = getMatches();

}]);
