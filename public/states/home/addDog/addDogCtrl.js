(function() {
  'use strict';
  angular.module('mutt-match')
    .controller('addDogCtrl', ['$scope', 'shelterService', '$state', 'Upload', '$timeout', '$http', '$q', function($scope, shelterService, $state, Upload, $timeout, $http, $q) {

      var vm = this;
      
      vm.addDogClick = () => {
        vm.addDogData = {
          name: vm.addDogData.name,
          age: vm.addDogData.age,
          breed: vm.addDogData.breed,
          active: vm.addDogData.active,
          grooming: vm.addDogData.grooming,
          size: vm.addDogData.size,
          noise: vm.addDogData.noise,
          experienceReq: vm.addDogData.experience,
          childFriendly: vm.addDogData.childFriendly,
          dogFriendly: vm.addDogData.dogFriendly,
          petFriendly: vm.addDogData.petFriendly
        };
        shelterService.addDog(vm.addDogData)
        .then((result) => {
          console.log('success adding dog ', result);
          $state.go('questionnaire');
        })
        .catch((err) => {
          console.error('error adding dog ', err);
        })
      }

    
      $scope.upload = function (file) {
        console.log('file name ', file.name);
        console.log('file type ', file.type);
        var fileName = file.name;
        var fileType = file.type;
        $http.post('/upload/' + file.name)
          .then((results) => {
            // var reader = new FileReader();
            // var xhr = new XMLHttpRequest();

            // xhr.open("PUT", $scope.url);
            // reader.onload = function(evt) {
            //   xhr.send(evt.target.result);
            // };
            // reader.readAsArrayBuffer($files[file]);
            console.log('trying to upload ', results);
            console.log('this is the file being uploaded ', file);
            console.log('this is the signed url ', results.data);

            var signedUrl = results.data;
            var d_completed = $q.defer(); // since I'm working with Angular, I use $q for asynchronous control flow, but it's not mandatory
            var xhr = new XMLHttpRequest();
            xhr.file = file; // not necessary if you create scopes like this

            xhr.onreadystatechange = function(e) {
              if ( 4 == this.readyState ) {
                // done uploading! HURRAY!
                d_completed.resolve(true);
              }
            };
            xhr.open('PUT', signedUrl, true);
            xhr.setRequestHeader("Content-Type","application/octet-stream");
            xhr.send(file);
          //   var signedUrl = results.data;
          //   var headers = {
          //     url: signedUrl,
          //     headers: {
          //       "Content-Type": 'application/octet-stream'
          //     },
          //     method: 'PUT',
          //     data: file
          //   };
          //   console.log('this is the header ', headers);
          //   Upload.http(headers);
          // })
          // .catch((err) => {
          //   console.error('error trying to upload shit ', err);
          // })



        // Upload.upload({
        //   url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        //   data: {file: file}
        // }).then(function (resp) {
        //   console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        // }, function (resp) {
        //   console.log('Error status: ' + resp.status);
        // }, function (evt) {
        //   var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //   console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        // });
      });  
      }
  }])  
})();
