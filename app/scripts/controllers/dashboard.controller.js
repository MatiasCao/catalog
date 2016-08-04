'use strict';

angular
    .module('catalogApp')
    .controller('DashboardCtrl', DashboardCtrl);


function DashboardCtrl($scope, $location, productFunctions, localStorageService) {

    var userLog = localStorageService.get('logStatus');
    if (userLog) {

        $scope.productList;

        productFunctions.getCurrentProductList().then(function(response) {
            $scope.productList = response;
        })

        $scope.removeProduct = function(product) {
            product.selected = true;
            productFunctions.removeProduct(product.id);
        }

        $scope.restoreProduct = function(product) {
            product.selected = false;
            productFunctions.restoreProduct(product.id);
        }

        $scope.editProduct = function(product) {
            productFunctions.setProductDetail(product);
            $location.path('/dashboard/edit');
        }

        $scope.logOut = function() {
            localStorageService.remove('logStatus');
            $location.path('/admin');
        }
    } else {
        $location.path('/admin');
    }

}
