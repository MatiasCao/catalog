'use strict';

angular
.module('catalogApp')
.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $location, productFunctions) {

  $scope.productList;
  $scope.productsToShow = [];
  var lastLoaded = 0;

  productFunctions.getCurrentProductList().then(function (response) {
    $scope.productList = response;
    $scope.loadMore();
  });

  var filterItems = [];

  $scope.filterItemsBy = function (item) {
    if (item === 'all') {
      productFunctions.getCurrentProductList().then(function (response) {
        $scope.productList = response;
        resetLazyLoad();
      });
    } else {
      productFunctions.getCurrentProductList().then(function (response) {
        $scope.productList = response;
        filterItems = [];
        for (var i = 0; i < $scope.productList.length; i++) {
          for (var j = 0; j < $scope.productList[i].categories.length; j++) {
            if (item === $scope.productList[i].categories[j]) {
              filterItems.push($scope.productList[i]);
            }
          }
        }
        $scope.productList = filterItems;
        resetLazyLoad();
      });
    }
  };

  $scope.reverse = false;
  $scope.sortBy = function (propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
    $scope.propertyName = propertyName;
  };

  $scope.viewDetail = function (product) {
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

  var resetLazyLoad = function() {
  	console.log($scope.productList);
  	$scope.productsToShow = [];
  	lastLoaded = 0;
  	$scope.loadMore();
  } 

};
