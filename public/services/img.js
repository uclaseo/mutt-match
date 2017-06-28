angular.module('mutt-match')


.service('imagesService', ['$http', '$log', function($http, $log) {

  this.get = (id) => $http.get(`/dogs/${id}/image`);

}]);