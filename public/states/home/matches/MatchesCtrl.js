angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'getMatches', function('$log', 'getMatches') {

  getMatches();
  $log('!!!!!', getMatches());

}]);
