angular.module('mutt-match')
  .service('questionnaireService', ['$http', '$log', function($http, $log) {

    this.update = (id, data) =>  $http.put(`/users/${id}`, data);

    this.createUserInfo = (data) => {
      return $http.post('/users', data)
    }

  }]);