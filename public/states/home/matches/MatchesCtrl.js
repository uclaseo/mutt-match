angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

  this.matches = [];

  matchesService.fetchMatches()
    .then(matches => this.matches = matches)
    .then(matches => $log.log('!!!!!', this.matches))
    .catch(err => console.error(err));


}]);
