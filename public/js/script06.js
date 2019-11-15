var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope){
        var countries=[
            {
                name:'USA',
                states:[
                    {name:'New Jersery'},
                    {name:'Texas'},
                    {name:'Florida'},
                    {name:'New York'}
                ]
            },
            {
                name:'BANGLADESH',
                states:[
                    {name:'Dhaka'},
                    {name:'Chittagong'},
                    {name:'Rajshahi'},
                    {name:'Khulna'}
                ]
            },
            {
                name:'INDIA',
                states:[
                    {name:'Mumbai'},
                    {name:'Chennai'},
                    {name:'Hyderabad'},
                    {name:'Kolkatta'}
                ]
            }
        ];

        $scope.countries=countries;
        $scope.appTitle='Nested Ng-Repeat in AngularJS';
        $scope.message="Hello Angular";
});
