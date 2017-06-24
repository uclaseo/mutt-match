angular.module('mutt-match')
  .service('questService', ['$http', function($http) {
      let questionnaire = {};
      return {
          put: () => users,
          fetch: () => {
              //update user/put request
              $http.put('/users', data)
              .then((results) => questionnaire = results.data)
              .then(() => {
                  console.log(questionnaire);
              })
              .catch(error => console.log(error));
          }
      };
  }]);