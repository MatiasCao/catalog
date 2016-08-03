'use strict';

angular
	.module('catalogApp')
	.controller('AddCtrl', AddCtrl);


function AddCtrl($scope, $location, productFunctions, localStorageService) {

  var userLog = localStorageService.get('logStatus');
  if (userLog) {

    $scope.product = {
      title: "",
      price: ""
    };

    $scope.checkCategory = function (category) {
      var categories = $scope.product.categories;
      for (var i = 0; i < categories.length; i++) {
        if (categories[i] === category) {
          return true;
        }
      }
    }

    $scope.saveProduct = function () {
      console.log($scope.product);
      productFunctions.editProduct($scope.product);
      $scope.goBack();
    }
  } else {
    $location.path('/admin');
  }

}
