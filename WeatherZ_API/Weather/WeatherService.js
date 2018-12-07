angular.module('app.weather.weatherService', [])
    .service('weatherService', function () {
        this.getWeather = function(cityName){
            return 30;
        }
    });