"use strict";

angular.module('mutt-match')

.service('shelterService', ['$http', '$stateParams', function($http, $stateParams) {
  this.addShelter = function(userId, data) {
    return $http.post('/shelters/' + userId, data)
  }
}]);