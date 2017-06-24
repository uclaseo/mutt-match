angular.module('mutt-match')
  .controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

    this.somethings = ['thing1', 'thing2', 'thing3'];

    this.matches = matchesService.fetchMatches()
      .then((matches) => $log.log('!!!!!', matches))
      .then(matches => {
        this.matches = matches;
      })
      .catch(err => console.error(err));

    $log.log('%%%', this.matches);
}]);
