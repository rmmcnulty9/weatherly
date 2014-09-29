'use strict';

/**
 * @ngdoc service
 * @name weatherlyApp.kelvinToDegree
 * @description
 * # kelvinToDegree
 * Service in the weatherlyApp.
 */
angular.module('weatherlyApp')
  .service('kelvinToDegree', function kelvinToDegree() {
    return function (value, type) {
        if(type === 'F') {
           return (value - 273.15) * 1.8000 + 32.00;
        }
        if(type === 'C') {
           return (value - 273.15) * 1.8000;
        }

        return value;
    }
  });
