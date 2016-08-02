'use strict';

angular
	.module('catalogApp')
	.controller('EditCtrl', EditCtrl);


function EditCtrl($scope, $location, productFunctions) {
	$scope.product = productFunctions.getProductDetail();
}