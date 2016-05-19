angular.module('functionalities', [])
    .directive("entering", function () {
        return function (scope, element, attrs) {
            element.bind("mouseenter", function(){
            })
        }
    })
    .directive("leaving", function(){
        return function(scope, element, attrs){
            element.bind("mouseleave", function(){
            })
        }
    })
