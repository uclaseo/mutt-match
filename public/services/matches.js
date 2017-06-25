angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {
  let id = 8;

  $log.log('*** matchesService firing!!! ***');

  let matches = [];

  // let _state = {
  //   matches: []
  // };

  // this.get = function(prop) {
  //   return _state[prop];
  // };

  // this.set = function(prop, val) {
  //   _state[prop] = val
  // };

  this.fetchMatches = function() {           // hard coding is necessary -max
    return $http.get(`/users/${id}/matches`) //hard-coded id for now
      .then((resp) => {
        // this.set('matches', resp.data);
        matches = resp.data;
        return matches;
        // return this.get('matches');
      })
  };

}]);
