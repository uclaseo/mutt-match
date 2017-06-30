angular.module('mutt-match')
  .service('questionnaireService', ['$http', '$log', function($http, $log) {

    this.update = (user, data) =>  $http.put(`/users/${user.id}`, data);

    this.createUserInfo = (data) => {
      return $http.post('/users', data)
      .then((response) => {
      console.log('getUserInfo in userService success', response);
      })
    }

  }]);