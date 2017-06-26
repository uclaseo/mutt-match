angular.module('mutt-match')
  .service('questionnaireService', ['$http', '$log', function($http, $log) {

    this.update = (user, data) =>  $http.put(`/users/${user.id}`, data);

  }]);