'use strict';

angular
    .module('catalogApp')
    .controller('DetailCtrl', DetailCtrl);


function DetailCtrl($scope, $location, productFunctions) {

    $scope.product = productFunctions.getProductDetail();

    var productsId = productFunctions.getCurrentFilteredProductList();

    $scope.goBack = function() {
        $location.path('/')
    }

    if (!$scope.product) {
        $scope.goBack();
    }

    $scope.nextProduct = function() {
        var lastId = productsId[productsId.length - 1];
        if ($scope.product.id === lastId) {
            $scope.product = productFunctions.getProductById(productsId[0]);
        } else {
            $scope.product = productFunctions.getProductById(productsId[getIdIndex($scope.product.id) + 1]);
        }
    }

    $scope.prevProduct = function() {
        var lastId = productsId[productsId.length - 1];
        if ($scope.product.id === productsId[0]) {
            $scope.product = productFunctions.getProductById(lastId);
        } else {
            $scope.product = productFunctions.getProductById(productsId[getIdIndex($scope.product.id) - 1]);
        }
    }

    var getIdIndex = function(id) {
        for (var i = 0; i < productsId.length; i++) {
            if (productsId[i] === id) {
                return i;
            }
        }
    }
};
