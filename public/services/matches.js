'use strict'

angular.module('mutt-match')

.service('getMatches', [$http, function($http) {

  //where to store the matches
  let matches = [];

  //url base
  let urlBase = 'http://localhost:3000/';

  //get
  $http.get(urlBase + 'matches')
    .then(resp => {
      matches = resp;
      console.log('Successful get', resp);
    })
    .catch(err => console.log('err', err));

}])
