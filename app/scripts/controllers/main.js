'use strict';

/**
 * @ngdoc function
 * @name weatherlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherlyApp
 */
angular.module('weatherlyApp')
  .controller('MainCtrl', function ($scope, getCurrentService, getForecastService, kelvinToDegree) {
    $scope.location;
    $scope.initMainData = {
        humidity: 68,
        pressure: 1014,
        temp: 288.9,
        temp_max: 291.15,
        temp_min: 286.15,
    };

    $scope.initWeatherData = {
        description: "few clouds",
        icon: "02n",
        id: 801,
        main: "Clouds"
    };

    $scope.currentMainData = $scope.initMainData;
    $scope.currentWeatherData = $scope.initWeatherData;

    $scope.getWeather = function () {
        getCurrentService($scope.location, function (main, weather) {

            $scope.currentMainData = data.main;
            $scope.currentWeatherData = data.weather[0];
        });

        getForecastService($scope.location, function (data) {
            console.log("forecast: ");
            console.log(data);
        });

    }
  });
