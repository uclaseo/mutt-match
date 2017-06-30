"use strict";

angular.module('mutt-match')

.service('shelterService', ['$http', '$stateParams', function($http, $stateParams) {

  this.shelterId = 1;

  this.addShelter = function(userId, data) {
    return $http.post('/shelters/' + userId, data)
  }

  this.addDog = function(data) {
    return $http.post('/dog/' + this.shelterId, data)
  }

}]);