"use strict";

angular.module('mutt-match')

.service('shelterService', ['$http', '$stateParams', 'store', function($http, $stateParams, store) {

  this.shelterId = store.get('profile').userInfo.data[0].shelterId;

  this.addShelter = function(userId, data) {
    return $http.post('/shelters/' + userId, data)
  }

  this.addDog = function(data) {
    return $http.post('/dog/' + this.shelterId, data)
  }

}]);