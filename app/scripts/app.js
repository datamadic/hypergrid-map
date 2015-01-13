'use strict';

/**
 * @ngdoc overview
 * @name gridApp
 * @description
 * # gridApp
 *
 * Main module of the application.
 */
angular
  .module('gridApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
