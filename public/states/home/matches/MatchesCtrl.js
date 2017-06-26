angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

  this.dogs = [1];

  matchesService.fetchMatches()
    .then(matches => this.dogs = matches)
    .then(matches => $log.log('DOGS', this.dogs))
    .catch(err => console.error(err));

}]);
