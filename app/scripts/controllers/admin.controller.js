'use strict';

angular
.module('catalogApp')
.controller('AdminCtrl', AdminCtrl);

function AdminCtrl($scope, $location, localStorageService, productFunctions) {
  var userLog = localStorageService.get('logStatus');
  if (userLog) {
    $location.path('/dashboard');
  } else {
    $scope.formValidation = function (user) {
      if (user === undefined || user.name === undefined || user.password === undefined) {
        $scope.enterData = true;
      } else {
        if (user.name === 'root' && user.password === 'root') {
            localStorageService.set('logStatus', true);
          $location.path('/dashboard');
        } else {
          $scope.enterData = true;
        }
      }
    }
  }
};
