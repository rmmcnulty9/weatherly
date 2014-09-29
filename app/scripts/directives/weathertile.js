'use strict';

/**
 * @ngdoc directive
 * @name weatherlyApp.directive:weatherTile
 * @description
 * # weatherTile
 */
angular.module('weatherlyApp')
  .directive('weatherTile', function (kelvinToDegree) {
    return {
      templateUrl: '../views/weathertile.html',
      restrict: 'E',
      scope: {
        wlyTitle: '=',
        wlyMainData: '=',
        wlyWeatherData: '=',
        degreeType: '='
      },
      link: function(scope, elm, attr) {
        scope.temp = kelvinToDegree(scope.wlyMainData.temp, scope.degreeType);
        scope.temp_high = kelvinToDegree(scope.wlyMainData.temp_max, scope.degreeType);
        scope.temp_low = kelvinToDegree(scope.wlyMainData.temp_min, scope.degreeType);
      }
    };
  });
