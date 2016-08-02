'use strict';

angular
	.module('catalogApp')
	.controller('DashboardCtrl', DashboardCtrl);


function DashboardCtrl($scope, $location, productFunctions) {
	$scope.productList;

	productFunctions.getCurrentProductList().then(function(response) {
		$scope.productList = response;
	})

	$scope.removeProduct = function(productId) {
		productFunctions.removeProduct(productId);
	}

    $scope.editProduct = function(product) {
        productFunctions.setProductDetail(product);
        $location.path('/dashboard/edit');
    }
}