angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {
  let id = 8;

  let matches = [];

  this.fetchMatches = function() { // hard coding is necessary -max
    return $http.get(`/users/${id}/matches`) //hard-coded id for now
      .then(resp => {
        matches = resp.data;
        return matches;
      })
      .catch(err => $log.log('err', err));
  };


}]);
