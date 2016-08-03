'use strict';

angular
	.module('catalogApp')
	.controller('EditCtrl', EditCtrl);

function EditCtrl($scope, $location, productFunctions, localStorageService) {

  var userLog = localStorageService.get('logStatus');
  if (userLog) {

    $scope.product = productFunctions.getProductDetail();

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
		return false;
	}

	$scope.categories = {
		men: $scope.checkCategory('men'),
		women: $scope.checkCategory('women'),
		jackets: $scope.checkCategory('jackets'),
		shirts: $scope.checkCategory('shirts'),
		't-shirts': $scope.checkCategory('t-shirts'),
		pants: $scope.checkCategory('pants'),
		accessories: $scope.checkCategory('accessories'),
		packs: $scope.checkCategory('packs')
	}

	$scope.changeCategories = function(newCategories) {
		$scope.product.categories = [];
		for(var category in newCategories) {
			if(newCategories[category]) {
				$scope.product.categories.push(category);
			}
		}
	}


	$scope.saveProduct = function() {
		$scope.changeCategories($scope.categories);
		productFunctions.editProduct($scope.product);
		$scope.goBack();
	}
  } else {
    $location.path('/admin');
  }
}
