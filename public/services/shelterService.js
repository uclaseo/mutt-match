"use strict";

angular.module('mutt-match')

.service('shelterService', ['$http', '$stateParams', function($http, $stateParams) {
  var service = {
    addShelter: function() {
      return $http.post('/shelters/' + $stateParams.userId)
    }
  }
}]);