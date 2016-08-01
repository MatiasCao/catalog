'use strict';

/**
 * @ngdoc overview
 * @name catalogApp
 * @description
 * # catalogApp
 *
 * Main module of the application.
 */
angular
  .module('catalogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/product-detail', {
        templateUrl: 'views/product-detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'main'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard/add', {
        templateUrl: 'views/dashboard/add.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard/edit', {
        templateUrl: 'views/dashboard/edit.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard/trash', {
        templateUrl: 'views/dashboard/trash.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
