'use strict';

/**
 * @ngdoc service
 * @name weatherlyApp.getForecastService
 * @description
 * # getForecastService
 * Service in the weatherlyApp.
 */
angular.module('weatherlyApp')
  .service('getForecastService', function getForecastService($http) {
    return function (location, callback) {
        $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + location).
          success (callback);
      };
  });
