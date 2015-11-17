myApp.controller('AddressController', ["$scope", "$http", function($scope, $http) {
    console.log('AddressController running');

    $scope.data = [];

    $scope.getAddressesForUser = function(userID) {

    };

}]);

myApp.controller('OrderController', ["$scope", "$http", function($scope, $http) {
    console.log('OrderController running');

    $scope.orders = [];

    $http.get('/orders/').then(
        function(response) {
            console.log(response.data);
            //$scope.orders = response.data.results;
        });

}]);

myApp.service('UserList', ["$scope", "$http"], function($scope, $http) {
    $scope.users = [];

    $scope.getUserList = function() {
        $http.get('/users', function(data) {

        })
    }
});