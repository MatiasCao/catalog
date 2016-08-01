'use strict';

/**
 * @ngdoc function
 * @name catalogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catalogApp
 */
angular
	.module('catalogApp')
	.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, productFunctions) {

	productFunctions.getProducts().then(function(response) {
		$scope.productList = response.data;
	});

};