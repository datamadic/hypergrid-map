'use strict';

/**
 * @ngdoc function
 * @name gridApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gridApp
 */
angular.module('gridApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
