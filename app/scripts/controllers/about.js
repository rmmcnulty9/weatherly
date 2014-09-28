'use strict';

/**
 * @ngdoc function
 * @name weatherlyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherlyApp
 */
angular.module('weatherlyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
