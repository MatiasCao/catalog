'use strict';

angular
.module('catalogApp')
.controller('TrashCtrl', TrashCtrl);


function TrashCtrl($scope, productFunctions) {

  $scope.trashedProducts = productFunctions.getTrashedProducts();

  $scope.restoreProduct = function (productId) {
    productFunctions.restoreProduct(productId);
  }

};
