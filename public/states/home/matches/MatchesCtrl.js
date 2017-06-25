angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

  this.dogs = [];

  this.getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

  matchesService.fetchMatches()
    .then(matches => this.dogs = matches)
    .then(matches => matches.forEach(match => match.score = this.getRandomArbitrary(60, 99)))
    .then(matches => $log.log('!!!', this.dogs))
    .catch(err => console.error(err));


}]);
