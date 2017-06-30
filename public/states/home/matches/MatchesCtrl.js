angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', 'imagesService', function($log, matchesService, imagesService) {

  this.dogs = [];

  matchesService.setMatches();

  // matchesService.getUserIdFromEmail()
  // .then((resp) => {
  //   matchesService.fetchMatches(resp.data.results.id)
  //   .then(matches => this.dogs = matches)
  //   .then(matches => $log.log('DOGS', this.dogs))
  //   .catch(err => console.error(err));
  // })
    
  this.getDogImage = (id) => {
    imagesService.get(id)
      .then(resp => {
        $log.info('RESP', resp.data);
        return resp.data;
      })
      .catch(err => $log.error(err));
  }

  // this.getDogImage(3);

}]);
