'use strict';

/**
 * @ngdoc function
 * @name weatherlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherlyApp
 */
angular.module('weatherlyApp')
  .controller('MainCtrl', function ($scope, getCurrentService, getForecastService) {
    $scope.location;
    $scope.getWeather = function () {
        getCurrentService($scope.location, function (data) {
            console.log("current: " + data);
        });

        getForecastService($scope.location, function (data) {
            console.log("forecast: " + data);
        });
    }
  });
