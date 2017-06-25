angular.module('mutt-match')
  .service('questionnaireService', ['$http', function($http) {
      return {
          update: (user, data) => $http.put(`/users/${user.id}`, data)
      };
  }]);