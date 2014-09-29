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
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
    };

    $scope.initWeatherData = [{
        description: "-",
        icon: "-",
        id: 801,
        main: "-"
    }];

    $scope.initForecastData = [
        {
            'main': {

            },
            'weather': {

            }
        },
        {
            'main': {

            },
            'weather': {

            }
        },
        {
            'main': {

            },
            'weather': {

            }
        }
    ];

    $scope.forecastData = $scope.initForecastData;
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
            $scope.forecastData = data;
        });

    }
  });
