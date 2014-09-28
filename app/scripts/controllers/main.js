'use strict';

/**
 * @ngdoc function
 * @name weatherlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherlyApp
 */
angular.module('weatherlyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
