angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', 'imagesService', 'store', function($log, matchesService, imagesService, store) {

  var id = store.get('profile').userInfo.data[0].id

  matchesService.fetchMatches(id)
  .then((resp) => {
    this.dogs = resp.data.results[0].dogs;
    console.log(this.dogs)
  })

}]);
