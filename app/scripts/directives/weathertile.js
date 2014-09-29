'use strict';

/**
 * @ngdoc directive
 * @name weatherlyApp.directive:weatherTile
 * @description
 * # weatherTile
 */
angular.module('weatherlyApp')
  .directive('weatherTile', function () {
    return {
      templateUrl: '../views/weathertile.html',
      restrict: 'E',
      scope: {
        wlyTitle: '=',
        wlyMainData: '=',
        wlyWeatherData: '='
      }
    };
  });
