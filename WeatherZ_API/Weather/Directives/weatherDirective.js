angular.module('app.weather.weatherDirective', [])
    .directive("weather", function() {
        return {
          restrict: "A",
          templateUrl: "weather/views/weather.html",
          controller:"weatherController"
        }
    });