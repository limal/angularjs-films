(function() {
    var myfilms = function($http, $log) {
        var filterFilms = function(onSuccess, onError) {
            return $http.get(
                    "/films.json"
                )
                .then(function(response) {
                    onProcessSuccess(response.data, onSuccess);
                }, onError);
        };
        
        var onProcessSuccess = function(data, onSuccess) {
            var films = [];
            var companies = [];
            
            companies.push({ name: "All" });
            
            for (film of data) {
                films.push({
                    company: film.company,
                    name: film.name,
                    image: film.image,
                    url: film.url
                });
                
                if (!inArray(companies, film.company)) {
                    companies.push({ name: film.company });
                }
            }
            
            onSuccess(films, companies);
        }
        
        var inArray = function(testArray, value) {
            for (var i = 0; i < testArray.length; i++) {
                if (testArray[i].name == value) {
                    return true;
                }
            }
            
            return false;
        };
        
        return {
            filterFilms: filterFilms
        };
    };
    
    var module = angular.module("angularjs-films");
    module.factory("myfilms", myfilms);
}());