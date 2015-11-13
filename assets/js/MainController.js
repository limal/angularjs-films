(function() {
    var app = angular.module("angularjs-films");
    var errorMessage = "Sorry, there was an error in our system. Please try again.";
    var processingMessage = "Please wait. Processing...";
    
    var MainController = function($scope, myfilms, $interval, $location) {
        $scope.processing = "Test";
        $scope.company = {
            name: ""
        }
        
        $scope.$watch(
            "company.name",
            function (newVal, oldVal) {
                $scope.company.name = newVal;
                $scope.changeCompany($scope.company);
            }
        );
        
        $scope.changeCompany = function(company) {
            $scope.processing = processingMessage;
            myfilms.filterFilms(company.name, onSuccess, onError);
        };
        
        var onError = function(data) {
            $scope.processing = errorMessage;
        }
        
        var onSuccess = function(data) {
            $scope.processing = "";
            
            console.log(data);
        }
    }
    
    app.controller("MainController", ["$scope", "myfilms", "$interval", "$location", MainController]);
}());