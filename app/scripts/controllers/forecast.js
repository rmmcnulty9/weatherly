'use strict';

/**
 * @ngdoc function
 * @name weatherlyApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherlyApp
 */
angular.module('weatherlyApp')
  .controller('ForecastCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
