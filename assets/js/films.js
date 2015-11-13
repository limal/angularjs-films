(function() {
    var myfilms = function($http, $log) {
        var filterFilms = function(company, onSuccess, onError) {
            return $http.get(
                    "/films.json"
                )
                .then(function(response) {
                    onSuccess(response.data);
                }, onError);
        };
        
        return {
            filterFilms: filterFilms
        };
    };
    
    var module = angular.module("angularjs-films");
    module.factory("myfilms", myfilms);
}());