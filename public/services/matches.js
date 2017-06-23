angular.module('mutt-match')

.service('matchService', ['$http', '$log', function($http, $log) {

  $log.log('*** matchService firing!!! ***');

  let _events = {};
  let _state = {
    matches: [],
  };

  this.getMatches = function(id) {
    return $http.get(`/users/${id}/matches`)
      // return $http.get(`http://localhost:3000/users/${id}/matches`)
      .then(resp => {
        this.set('matches', resp.data.results);
        $log.log('*** matchService.getMatches firing!!! ***');
        return this.get('matches');
      })
      .catch(err => console.log('err', err));

  };

  this.get = function(prop) {
    return _state[prop];
  };

  this.set = function(prop, val) {
    _state[prop] = val;

    if (_events[prop]) {
      _events[prop].forEach(cb => cb(val));
    }

    return val;
  };

}]);
