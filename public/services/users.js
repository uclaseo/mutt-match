"use strict";

angular.module('mutt-match')
.service('userService', ['$http', 'store', function($http, store) {

  this.getUserIdFromEmail = function() {
    var email = store.get('profile').email;
    return $http.get(`/users/email/${email}`)
  }

}]);