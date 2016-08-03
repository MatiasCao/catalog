'use strict';

angular
.module('catalogApp')
.controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $location, productFunctions) {

  $scope.productList;

  productFunctions.getCurrentProductList().then(function (response) {
    $scope.productList = response;
  });

  var filterItems = [];

  $scope.filterItemsBy = function (item) {
    if (item === 'all') {
      productFunctions.getCurrentProductList().then(function (response) {
        $scope.productList = response;
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
};
