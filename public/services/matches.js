'use strict'

angular.module('mutt-match', [$http])

.service('getMatches', [$http, id, function($http, id) {
  id = id || 8;
  let matches = [];
  let url = 'http://localhost:3000/users/' + 'id' + '/matches';
  console.log(url);

  $http.get(url)
    .then(resp => {
      matches = resp;
      console.log('Successful get', matches);
    })
    .catch(err => console.log('err', err));

}])
