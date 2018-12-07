angular.module('app.weather.addCityDirective', [])
    .directive("addcity", function() {
        return {
          restrict: "A",
          templateUrl: "weather/views/addCity.html",
          controller:"weatherController"
        }
    });