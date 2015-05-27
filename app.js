/**
 * Created by dan on 27.05.2015.
 */
(function(){
    var app = angular.module('MyApp', ['ui.bootstrap'])

    app.directive("alert", function() {
       return{
         restrict: "EA",
         templateUrl: "alert.html",
         transclude: true
       };
    });

    app.controller('MyController', function($scope) {
        $scope.message = "Hello World";

    });

}());
