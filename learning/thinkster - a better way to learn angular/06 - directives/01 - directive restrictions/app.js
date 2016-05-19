angular.module('greetings', []);

angular.module('greetings').directive("welcomeElement", function () {
    return {
        restrict: "E",
        template: "<div>Howdy there!! You look splendid.</div>"
    }
});

angular.module('greetings').directive("welcomeAttr", function () {
    return {
        restrict: "A",
        link: function () {
            alert("Howdy!");
        }
    }
});

angular.module('greetings').directive("welcomeClass", function () {
    return {
        restrict: "C",
        link: function () {
            alert("Howdy!");
        }
    }
});

angular.module('greetings').directive("welcomeComment", function () {
    return {
        restrict: "M",
        link: function () {
            alert("Howdy!");
        }
    }
});