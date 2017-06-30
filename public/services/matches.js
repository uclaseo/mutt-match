angular.module('mutt-match')

.service('matchesService', ['$http', '$log', 'store', 'userService', function($http, $log, store, userService) {

  // let sex = ['male', 'female'];

  this.getDogs = function() {
    return $http.get('/dog');
  }

  this.fetchMatches = function(id) { 
    console.log(id)
    return $http.get(`/users/${id}/matches`)
  };


}]);
