'use strict';

angular
	.module('catalogApp')
	.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $location, productFunctions) {

	productFunctions.getProducts().then(function(response) {
		$scope.productList = response.data;
	});

  $scope.reverse = false;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
    $scope.propertyName = propertyName;
  };

	$scope.viewDetail = function(product) {
		productFunctions.setProductDetail(product);
		$location.path('/product-detail');
	};

  $scope.viewDetail = function(product) {
    productFunctions.setProductDetail(product);
    $location.path('/product-detail');


  };
};

//- ng-show="user.hide"
//- user.hide = false
