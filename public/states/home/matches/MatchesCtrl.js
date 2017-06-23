angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchService', function($log, matchService) {

  this.matches = matchService.get('matches');

  matchService.getMatches()
    .then(matches => {
      this.matches = matches;
      $log.log('*** MatchesCtrl is firing! ***');
      $log.log(this.matches);
    })
    .catch(err => console.log('err', err));

}]);
