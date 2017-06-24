angular.module('mutt-match')
  .controller('MatchesCtrl', ['$log', 'matchesService', function($log, matchesService) {

    this.getAll = matchesService.get;
    this.fetch = matchesService.fetch;

    (function init() {
      matchesService.fetch();
    })();

}]);
