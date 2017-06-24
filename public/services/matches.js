angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {
  let id = 8;

  $log.log('*** matchesService firing!!! ***');

  let matches = [];
  let dogs = [];

  this.fetchMatches = function() {
    return $http.get(`/users/${id}/matches`) //hard-coded id for now
      .then((resp) => {
        matches = resp.data;
        return matches;
      })
  };

  this.fetchDogs = function() {
    return $http.get()
      .then()
      .catch();
  }

}]);
