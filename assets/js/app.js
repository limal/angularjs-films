(function() {
    var app = angular.module("angularjs-films", ["ngRoute", "angular.filter"]);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .otherwise({ redirectTo: "/main" })
    });
}());