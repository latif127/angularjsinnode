var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope){
        var country={
            name:"United States Of America",
            capital:"Washington, D.C.",
            flag:"/images/flag-usa.png"
        };
    
    $scope.appTitle='AngularJS Application';
    $scope.country=country;
});
