angular.module('mutt-match')
  .service('questionnaireService', ['$http', '$log', function($http, $log) {
      $log.log('!!!questionnaireService');
      return {
          update: (id, data) => $http.put(`/users/${id}`, data)
      };
  }]);