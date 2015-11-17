myApp.controller('AddressController', ["$scope", "$http", function($scope, $http) {
    console.log('AddressController running');

    $scope.data = [];

    $scope.getAddressesForUser = function(userID) {

    };

}]);

myApp.controller('OrderController', ["$scope", "$http", function($scope, $http) {
        console.log('OrderController running');
        $scope.orders = [];
        $scope.users = [];
        $scope.ordersTotal = 0;
        $scope.selectedUser = {};

        $scope.selectUser = function() {
            console.log($scope.selectedUser);
        };

        $scope.getOrders = function() {
            $http({
                url: '/orders/',
                method: 'GET',
                params: {userID: $scope.selectedUser.id}
            }).then(
                function(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        $scope.ordersTotal += parseFloat(response.data[i].amount);
                    }
                    $scope.orders = response.data;
                });
        };

        // get list of users
        $http.get('/users/').then(
            function(response) {
                console.log(response.data);
                $scope.users = response.data;
            });


}]);

myApp.service('UserList', ["$scope", "$http"], function($scope, $http) {
    $scope.users = [];

    $scope.getUserList = function() {
        $http.get('/users', function(data) {

        })
    }
});