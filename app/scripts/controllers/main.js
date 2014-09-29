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
        humidity: "-",
        pressure: "-",
        temp: "-",
        temp_max: "-",
        temp_min: "-",
    };

    $scope.initWeatherData = {
        description: "-",
        icon: "-",
        id: 801,
        main: "-"
    };

    $scope.currentMainData = $scope.initMainData;
    $scope.currentWeatherData = $scope.initWeatherData;

    $scope.getWeather = function () {
        getCurrentService($scope.location, function (main, weather) {

            $scope.currentMainData = main;
            $scope.currentWeatherData = weather;
        });

        getForecastService($scope.location, function (data) {
            console.log("forecast: ");
            console.log(data);
        });

    }
  });
