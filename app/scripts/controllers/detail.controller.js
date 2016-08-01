'use strict';

angular
	.module('catalogApp')
	.controller('DetailCtrl', DetailCtrl);


function DetailCtrl($scope, productFunctions) {

	productFunctions.getProducts().then(function(response) {
		$scope.productList = response.data;
	});

	console.log($scope.test);


};