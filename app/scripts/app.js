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
        'ngTouch',
        'LocalStorageModule',
        'infinite-scroll'
    ])
    .config(function($routeProvider) {
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
                controller: 'AdminCtrl',
                controllerAs: 'main'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            })
            .when('/dashboard/add', {
                templateUrl: 'views/dashboard/add.html',
                controller: 'AddCtrl',
                controllerAs: 'add'
            })
            .when('/dashboard/edit', {
                templateUrl: 'views/dashboard/edit.html',
                controller: 'EditCtrl',
                controllerAs: 'edit'
            })
            .when('/dashboard/trash', {
                templateUrl: 'views/dashboard/trash.html',
                controller: 'TrashCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('catalog');
    }]);
