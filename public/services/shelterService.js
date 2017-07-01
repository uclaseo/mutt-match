"use strict";

angular.module('mutt-match')

.service('shelterService', ['$http', '$stateParams', 'store', function($http, $stateParams, store) {

  var shelterId;
  var shelters = [];
  this.shelterId = store.get('profile').userInfo.data[0].shelterId;

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