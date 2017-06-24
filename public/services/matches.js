angular.module('mutt-match')

.service('matchesService', ['$http', '$log', function($http, $log) {

  $log.log('*** matchService firing!!! ***');

  let matches = [];
  
  //until we get a users service
  id = id || 8;

  return {
    get: () => matches,
    fetch: (id) => {
      $http.get(`/users/${id}/matches`)
        .then((results) => matches = results.data)
        .then(() => $log.log(matches))
        .catch(err => $log.log('err', err));
    }
  };


}]);
