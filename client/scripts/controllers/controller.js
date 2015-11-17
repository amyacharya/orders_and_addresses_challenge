myApp.controller('AddressController', ["$scope", "$http", function($scope, $http) {
    console.log('AddressController running');

    $scope.data = [];

    $scope.getAddressesForUser = function(userID) {

    };

}]);

myApp.controller('OrderController', ["$scope", "$http", function($scope, $http) {
    console.log('OrderController running');
    $scope.orders = [];

    $http({
        url: '/orders/',
        method: 'GET',
        params: {userID: 1}
    }).then(
        function(response) {
            console.log(response.data);
            $scope.orders = response.data;
        });

}]);

myApp.service('UserList', ["$scope", "$http"], function($scope, $http) {
    $scope.users = [];

    $scope.getUserList = function() {
        $http.get('/users', function(data) {

        })
    }
});