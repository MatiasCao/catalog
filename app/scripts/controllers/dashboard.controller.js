'use strict';

angular
.module('catalogApp')
.controller('DashboardCtrl', DashboardCtrl);


function DashboardCtrl($scope, $location, productFunctions, localStorageService) {
  $scope.productList;

  productFunctions.getCurrentProductList().then(function (response) {
    $scope.productList = response;
  })

  $scope.removeProduct = function (product) {
    product.selected = true;
    productFunctions.removeProduct(product.id);
  }

  $scope.restoreProduct = function (product) {
    product.selected = false;
    productFunctions.restoreProduct(product.id);
  }

  $scope.editProduct = function (product) {
    productFunctions.setProductDetail(product);
    $location.path('/dashboard/edit');
  }

  $scope.logOut = function () {
    $location.path('/admin');
    localStorageService.remove('logStatus');
  }

}
