angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {
  let id = 8;

  let matches = [1];

  this.fetchMatches = function() { // hard coding is necessary -max
    return $http.get(`/users/${id}/matches`) //hard-coded id for now
      .then(resp => {
        let scores = resp.data.pop();
        matches = resp.data.reduce((acc, cur, i) => {
          cur.score = scores[i];
          acc.push(cur);
          return acc;
        }, []);
        matches.sort((a, b) => a.score > b.score ? -1 : 1);
        return matches;
      })
      .catch(err => $log.log('err', err));
  };


}]);
