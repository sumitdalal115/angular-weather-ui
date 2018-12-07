angular.module('app.weather.weatherController', [])
    .controller("weatherController", function($scope, weatherService) {
        $scope.description = "a simple weather app - below is my weather widget";
        $scope.cities = ['delhi', 'mumbai', 'chennai', 'kolkatta'];
        $scope.newCityName = '';
        $scope.temperature = weatherService.getWeather('New Delhi');
        $scope.showWeahterFlag = true;
        $scope.hide = function(){
            $scope.showWeahterFlag = false;
        }
        $scope.show = function(){
            $scope.showWeahterFlag = true;
        }
        $scope.addCity = function(cityName){
            $scope.cities.indexOf(cityName) === -1 ? $scope.cities.push(cityName) : console.log('city already exists!!!');
            $scope.newCityName = '';
        }
    });

//angular.element($0).scope()