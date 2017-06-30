angular.module('mutt-match')
.service('messageService', ['$http', function($http) {
  const vm = this;
  vm.getMessages = getMessages;
  function getMessages() {
    return $http.get('message/3')
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return console.log('messageService error', error);
      })
  }
}])