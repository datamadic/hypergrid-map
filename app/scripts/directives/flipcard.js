'use strict';

/**
 * @ngdoc directive
 * @name gridApp.directive:flipCard
 * @description
 * # flipCard
 */
angular.module('gridApp')
  .directive('flipCard', function () {
    return {
      template: '<p><button ng-click="toggleFlip()" class="btn btn-lg btn-success" ng-href="#">Flip! {{ok}}</button></p>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {},
      controller: function($scope, $rootScope) {
        $scope.toggleFlip = function(){

          $rootScope.$broadcast('flip');
        };
      }//end controller
    };
  });
