'use strict';

/**
 * @ngdoc function
 * @name gridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gridApp
 */
angular.module('gridApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
