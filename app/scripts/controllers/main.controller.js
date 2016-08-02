'use strict';

angular
	.module('catalogApp')
	.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $location, productFunctions) {

	$scope.productList;

	productFunctions.getCurrentProductList().then(function(response) {
		$scope.productList = response;
	})

  $scope.reverse = false;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
    $scope.propertyName = propertyName;
  };

  $scope.viewDetail = function(product) {
    productFunctions.setProductDetail(product);
    $location.path('/product-detail');


  };
};

//- ng-show="user.hide"
//- user.hide = false
