'use strict';

angular
	.module('catalogApp')
	.controller('EditCtrl', EditCtrl);


function EditCtrl($scope, $location, productFunctions) {
	$scope.product = productFunctions.getProductDetail();
  console.log($scope.product);

	$scope.goBack = function() {
		$location.path('/dashboard');
	}

	if(!$scope.product) {
		$scope.goBack();
	}

	$scope.checkCategory = function(category) {
		var categories = $scope.product.categories;
		for(var i = 0; i < categories.length; i++) {
			if(categories[i] === category) {
				return true;
			}
		}
	}

	$scope.saveProduct = function() {
		console.log($scope.product);
		productFunctions.editProduct($scope.product);
		$scope.goBack();
	}
}
