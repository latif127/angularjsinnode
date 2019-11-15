var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope){
        var employee={
            firstName:'Robert',
            lastName:'Johnson',
            age: 41        
        };
        $scope.employee=employee;
        $scope.appTitle='AngularJS Application';
        $scope.message="Hello Angular";
});
