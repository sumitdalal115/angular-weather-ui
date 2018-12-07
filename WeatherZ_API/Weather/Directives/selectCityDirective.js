angular.module('app.weather.selectCityDirective', [])
    .directive("selectcity", function() {
        return {
          restrict: "A",
          templateUrl: "weather/views/selectCity.html",
          controller:"weatherController"
        }
    });