angular.module('mutt-match')
  .controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {
    this.matches = matchesService.get('matches');

    matchesService.fetchMatches()
      .then((matches) => $log.log('!!!!!', matches))
      .then(matches => {
        this.matches = matches;
      })
      .catch(err => console.error(err));
}]);
