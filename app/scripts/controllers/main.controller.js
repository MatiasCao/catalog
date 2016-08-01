'use strict';

angular
	.module('catalogApp')
	.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $location, productFunctions) {

	productFunctions.getProducts().then(function(response) {
		console.log('call');
		$scope.productList = response.data;
	});

	$scope.viewDetail = function(product) {
		productFunctions.setProductDetail(product);
		$location.path('/product-detail');
	};
};