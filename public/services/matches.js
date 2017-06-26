angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {
  let id = 8;

  let matches = [];
  let breeds = [
    'Pitbull',
    'Pitbull',
    'Pitbull',
    'Pitbull',
    'Shepherd',
    'Shepherd',
    'Poodle',
    'Chihuahua',
    'Chihuahua',
    'Husky',
    'Boxer',
    'Bulldog',
    'Dalmation'
  ];

  let sex = ['male', 'female'];

  let mix = ['-mix', '-mix', '']

  this.fetchMatches = function() { // hard coding is necessary -max
    return $http.get(`/users/${id}/matches`) //hard-coded id for now -nate
      .then(resp => {
        let scores = resp.data.pop();
        matches = resp.data.reduce((acc, cur, i) => {
          cur.score = scores[i];
          let breed = breeds[Math.floor(Math.random() * breeds.length)];
          breed += mix[Math.floor(Math.random() * mix.length)];
          cur.breed = breed;
          cur.sex = sex[Math.floor(Math.random() * sex.length)];
          acc.push(cur);
          return acc;
        }, []);
        matches.sort((a, b) => a.score > b.score ? -1 : 1);
        return matches;
      })
      .catch(err => $log.log('err', err));
  };


}]);
