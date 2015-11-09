var myApp = angular.module('myApp', []);



myApp.controller("WelcomeController",['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.nameArray = [];

    //POST
    $scope.clickButton = function(kittyFooFoo){
        $http.post('/people', kittyFooFoo).then(function(response){
            $scope.getPeople();
        });
    };

    //GET
    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = response.data;
        });
    };

    $scope.getPeople();
}]);

