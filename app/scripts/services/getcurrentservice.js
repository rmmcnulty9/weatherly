'use strict';

/**
 * @ngdoc service
 * @name weatherlyApp.getCurrentService
 * @description
 * # getCurrentService
 * Service in the weatherlyApp.
 */
angular.module('weatherlyApp')
  .service('getCurrentService', function getCurrentService($http) {
    return function (location, callback) {
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location).
          success (function(data) {
            callback(data.main, data.weather[0]);
            });
      };
  });
