'use strict';

angular
.module('catalogApp')
.controller('TrashCtrl', TrashCtrl);


function TrashCtrl($scope, productFunctions, localStorageService) {

  var userLog = localStorageService.get('logStatus');
  if (userLog) {

    $scope.trashedProducts = productFunctions.getTrashedProducts();

    $scope.restoreProduct = function (productId) {
      productFunctions.restoreProduct(productId);
    }
  } else {
    $location.path('/admin');
  }

};
