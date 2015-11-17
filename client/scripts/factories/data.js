myApp.factory('DataService', ["$http", function($http){
    var data = undefined;

    //PRIVATE
    var getData = function(){
        $http.get('/data').then(function(response){
            data = response.data.people;
            console.log("Async Data Response: ", data);
        });
    };

    //PUBLIC
    var publicApi = {
        retrieveData: function(){
            data = getData();
        },
        peopleData: function(){
            return data;
        }
    };

    return publicApi;
}]);