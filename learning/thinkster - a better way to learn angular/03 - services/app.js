angular.module('app', []);

angular.module('app').factory('messages', function () {
    var messages = {};

    messages.list = [];

    messages.add = function (message) {
        messages.list.push({id: messages.list.length, text: message})
    };

    messages.remove = function (index) {
        messages.list.splice(index, 1);
    };

    return messages;
});

angular.module('app').controller('ListCtrl', function (messages) {
    var self = this;

    self.messages = messages.list;

    self.removeMessage = function(index) {
        messages.remove(index);
    };
});

angular.module('app').controller('PostCtrl', function (messages) {
    var self = this;

    self.newMessage = 'Hello World!';

    self.addMessage = function (message) {
        messages.add(message);
        self.newMessage = '';
    };

});