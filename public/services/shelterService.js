"use strict";

angular.module('mutt-match')

.service('shelterService', ['$http', '$stateParams', function($http, $stateParams) {

  var shelterId;
  var shelters = [];

  this.addShelter = function(userId, data) {
    return $http.post('/shelters/' + userId, data)
  }

  this.addDog = function(data) {
    return $http.post('/dog/' + this.shelterId, data)
  }

  this.getAllShelters = function() {
    return $http.get('/shelters')
      .then((response) => {
        console.log('THIS IS RESPONSE', response);
        shelters = response;
        return response;
      })
      .catch((error) => {
        return error;
      })
  }

  // this.addDog = function
}]);