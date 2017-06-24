angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

  this.matches = [];

  this.somethings = ['thing1', 'thing2', 'thing3'];

  matchesService.fetchMatches()
    .then(matches => this.matches = matches)
    .then(matches => $log.log('!!!!!', this.matches))
    .catch(err => console.error(err));

    }]);
