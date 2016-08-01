'use strict';

angular
	.module('catalogApp')
	.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, productFunctions) {

	productFunctions.getProducts().then(function(response) {
		$scope.productList = response.data;
	});

	$scope.test = 'test';

	//$scope.viewDetail(product) = productFunctions.setProductDetail(product);

};