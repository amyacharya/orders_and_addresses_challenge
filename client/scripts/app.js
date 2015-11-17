var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/addresses', {
            templateUrl: "assets/views/routes/addresses.html",
            controller: "AddressController"
        })
        .when('/orders', {
            templateUrl: "assets/views/routes/orders.html",
            controller: "OrderController"
        })
        .otherwise({
            redirectTo: 'addresses'
        });

}]);

myApp.service('UserService', ['$http', function($http) {
    var data = undefined;

    // get list of users
    var getUsers = function() {
        var promise = $http.get('/users/').then(
                function(response) {
                    data = response.data;
                    console.log("Async User Data Response: ", data);
                });

        return promise;
    };

    var publicApi = {
        userList: function(){
            return getUsers();
        },
        userData: function(){
            return data;
        }
    };

    return publicApi;

}]);