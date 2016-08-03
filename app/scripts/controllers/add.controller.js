'use strict';

angular
	.module('catalogApp')
	.controller('AddCtrl', AddCtrl);


function AddCtrl($scope, $location, productFunctions) {

	$scope.product = {
		id: productFunctions.getNewProductId(),
		created: new Date().toJSON(),
		lastChanged: new Date().toJSON(),
		title: "",
		price: 0,
		image: "",
		description: "",
		categories: []
	};

	$scope.categories = {
		men: false,
		women: false,
		jackets: false,
		shirts: false,
		't-shirts': false,
		pants: false,
		accessories: false,
		packs: false
	}

	$scope.changeCategories = function(newCategories) {
		$scope.product.categories = [];
		for(var category in newCategories) {
			if(newCategories[category]) {
				$scope.product.categories.push(category);
			}
		}
	}

	$scope.addProduct = function() {
		$scope.changeCategories($scope.categories);
		productFunctions.addProduct($scope.product);
		$scope.goBack();
	}

	$scope.goBack = function() {
		$location.path('/dashboard');
	}
}