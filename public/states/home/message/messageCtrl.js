angular.module('mutt-match')
.controller('messageCtrl', ['messageService', function(messageService) {
  const vm = this;
  vm.renderMessages = renderMessages;
  vm.messages = [];

  function renderMessages() {
    messageService.getMessages()
    .then((response) => {
      console.log('hello', response);
      for (var i = response.data.length - 1; i >= 0; i--) {
        vm.messages.push(response.data[i]);
      }
      console.log(vm.messages);
    })
    .catch((error) => {
      console.log('error', error);
    })
  };
}])