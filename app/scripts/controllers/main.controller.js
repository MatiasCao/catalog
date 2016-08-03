'use strict';

angular
	.module('catalogApp')
	.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $location, productFunctions) {

	$scope.productList;
	$scope.productsToShow = [];
	var lastLoaded = 0;

	productFunctions.getCurrentProductList().then(function(response) {
		$scope.productList = response;
		$scope.loadMore();
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

  $scope.loadMore = function() {
  	var last = $scope.productList.length - 1;
  	var quantityToLoad = 8;

  	if(quantityToLoad + lastLoaded > last) {
  		quantityToLoad = 1;
  	}

  	if(lastLoaded <= last) {
  		for(var i = lastLoaded; i < lastLoaded + quantityToLoad; i++) {
	  		$scope.productsToShow.push($scope.productList[i]);
	  	}
	  	lastLoaded = i;
  	}
  };
};
