angular.module('mutt-match')

.controller('MatchesCtrl', ['$log', 'matchesService', 'imagesService', 'store', function($log, matchesService, imagesService, store) {

  this.dogs = [];

  var id = store.get('profile').userInfo.data.id

  matchesService.fetchMatches(id)
  .then((resp) => {
    var fiveDogMatchesArray = resp.data.results[0].dogs;
    console.log(fiveDogMatchesArray)
  })

}]);
