'use strict';

angular
    .module('catalogApp')
    .controller('TrashCtrl', TrashCtrl);


function TrashCtrl($scope, productFunctions, localStorageService) {

    var userLog = localStorageService.get('logStatus');
    if (userLog) {
        $scope.trashedProducts = productFunctions.getTrashedProducts();
        //$scope.trashedProducts.product.selected = true;
        $scope.restoreProduct = function(product) {
            product.selected = false;
            productFunctions.restoreProduct(product);
        }
    } else {
        $location.path('/admin');
    }
};
