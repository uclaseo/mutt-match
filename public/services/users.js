"use strict";

angular.module('mutt-match')

.service('userService', [ function() {
  var currentUser = null;
  return {
    get: () => currentUser,
    set: (user) => currentUser = user
  };
}]);