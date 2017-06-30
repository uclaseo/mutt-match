angular.module('mutt-match')

.service('matchesService', ['$http', '$log', 'store', 'userService', function($http, $log, store, userService) {

  let matches = [];
  // let breeds = [
  //   'Pitbull',
  //   'Pitbull',
  //   'Pitbull',
  //   'Pitbull',
  //   'Shepherd',
  //   'Shepherd',
  //   'Poodle',
  //   'Chihuahua',
  //   'Chihuahua',
  //   'Husky',
  //   'Boxer',
  //   'Bulldog',
  //   'Dalmation'
  // ];


  // let sex = ['male', 'female'];

  // let mix = ['-mix', '-mix', '']

  this.getDogs = function() {
    return $http.get('/dog');
  }

  this.fetchMatches = function(id) { 
    console.log(id)
    return $http.get(`/users/${id}/matches`)
  };


}]);
