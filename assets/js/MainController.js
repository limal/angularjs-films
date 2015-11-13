(function() {
    var app = angular.module("angularjs-films");
    var errorMessage = "Sorry, there was an error in our system. Please try again.";
    var processingMessage = "Please wait. Processing...";
    
    var MainController = function($scope, myfilms, $interval,$location) {
        $scope.processing = "Test";
        $scope.selectedCompany = "All";
        
        $scope.$watch(
            "selectedCompany",
            function (newVal, oldVal) {
                if (typeof newVal != 'undefined') {
                    $scope.selectedCompany = newVal;
                }
            }
        );
        
        var onError = function(data) {
            $scope.processing = errorMessage;
        }
        
        var onSuccess = function(films, companies) {
            $scope.processing = "";
            
            $scope.films = films;
            $scope.companies = companies;
        }
        
        // load film data
        myfilms.filterFilms(onSuccess, onError);
        
        $scope.filterByCompany = function(film) {
            if (typeof $scope.selectedCompany == "undefined" || $scope.selectedCompany == "All") {
                return true;
            } else {
                return $scope.selectedCompany.indexOf(film.company) !== -1;
            }
        };
    }
    
    app.controller("MainController", ["$scope", "myfilms", "$interval", "$location", MainController]);
}());