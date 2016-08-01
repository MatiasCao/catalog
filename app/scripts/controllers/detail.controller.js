'use strict';

angular
	.module('catalogApp')
	.controller('DetailCtrl', DetailCtrl);


function DetailCtrl($scope, $location, productFunctions) {

	$scope.product = productFunctions.getProductDetail();

	$scope.goBack = function() {
		$location.path('/')
	}
};