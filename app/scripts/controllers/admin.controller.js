'use strict';

angular
    .module('catalogApp')
    .controller('AdminCtrl', AdminCtrl);

function AdminCtrl($scope, $location, localStorageService, productFunctions) {
    var userLog = localStorageService.get('logStatus');
    if (userLog) {
        $location.path('/dashboard');
    } else {
        $scope.formValidation = function(user) {
            console.log(user);
            $scope.enterDataTotal = false;
            $scope.enterDataUser = false;
            $scope.enterDataPassword = false;
            if (user === undefined || ((user.name === '' || user.name === undefined) && (user.password === '' || user.password === undefined))) {
                $scope.enterDataTotal = true;
            } else {
                if (user.name !== 'root' && user.password !== 'root') {
                    $scope.enterDataUser = true;
                    $scope.enterDataPassword = true;
                } else if (user.name !== 'root' && user.password === 'root') {
                    $scope.enterDataUser = true;
                } else if (user.name === 'root' && user.password !== 'root') {
                    $scope.enterDataPassword = true;
                } else if (user.name === 'root' && user.password === 'root') {
                    localStorageService.set('logStatus', true);
                    $location.path('/dashboard');
                } else {
                    $scope.enterData = true;
                }
            }
        }
    }
};
