'use strict';

angular
	.module('catalogApp')
	.controller('DetailCtrl', DetailCtrl);


function DetailCtrl($scope, $location, productFunctions) {

	$scope.product = productFunctions.getProductDetail();

	$scope.goBack = function() {
		$location.path('/')
	}

	$scope.nextProduct = function() {
		var lastId = productFunctions.getCurrentProductList().length -1;
		if($scope.product.id === lastId) {
			$scope.product = productFunctions.getProductById(0);
		} else {
			$scope.product = productFunctions.getProductById($scope.product.id + 1);
		}
	}

	$scope.prevProduct = function() {
		var lastId = productFunctions.getCurrentProductList().length -1;
		if($scope.product.id === 0) {
			$scope.product = productFunctions.getProductById(lastId);
		} else {
			$scope.product = productFunctions.getProductById($scope.product.id - 1);
		}
	}
};