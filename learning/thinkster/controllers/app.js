angular.module('app', []);

angular.module('app').controller('MainCtrl', function($scope){
    var self = this;

    self.message = 'hello';
    self.changeMessage = function (message) {
        self.message = message;
        self.newMessage="";
    };
});