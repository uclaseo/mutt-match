angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

  this.dogs = [];

  matchesService.fetchMatches()
    .then(matches => this.dogs = matches)
    .then(matches => $log.log('!!!', this.dogs))
    .catch(err => console.error(err));


}]);
