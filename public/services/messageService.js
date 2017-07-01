angular.module('mutt-match')
.service('messageService', ['$http', 'store', function($http, store) {
  const vm = this;
  vm.id;
  vm.getMessages = getMessages;
  vm.sendMessage = sendMessage;
  vm.replyMessage = replyMessage;
  vm.getMessageHistory = getMessageHistory;

  function getMessages() {
    vm.id = store.get('profile').userInfo.data[0].id;
    return $http.get(`message/${vm.id}`)
      .then((response) => {

        return response;
      })
      .catch((error) => {
        return console.log('messageService error', error);
      });
  };
  function sendMessage(text, to) {
    vm.id = store.get('profile').userInfo.data[0].id;
    return $http.post(`message/${vm.id}/${to}`, {message: text})
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return console.log('messageService error', error);
      });
  }

  function replyMessage(text, to, chatId) {
    vm.id = store.get('profile').userInfo.data[0].id;
    console.log('text: ', text);
    console.log('chatId: ', chatId);
    return $http.post(`message/reply/${vm.id}/${to}`, {message: text, messageId: chatId})
      .then((response) => {
        $http.get(`message/reply/${vm.id}/${chatId}`)
          .then((response) => {
          console.log('GETMESSAGESSSS', response);
        })
        return response;
      })
      .catch((error) => {
        return console.log('messageService error', error);
      })
  }

  function getMessageHistory(messageIds) {
    console.log('hi');
    console.log('messageIds', messageIds);
    return $http.get(`message/reply/${messageIds}`)
      .then(response => {
        console.log(response);
        return response;
      })
  }
}])