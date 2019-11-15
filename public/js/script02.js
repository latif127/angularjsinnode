var myApp = angular.module("myModule",[])

myApp.controller("myController", function($scope){
    var employee={
        firstName:'Robert',
        lastName:'Johnson',
        age: 41        
    };
    $scope.appTitle='Sample AngularJS Application';
    $scope.employee=employee;
});
