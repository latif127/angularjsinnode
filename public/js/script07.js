var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope){
        var footballers=[
            {name:"Cristiano Ronaldo", likes:0, dislikes:0},
            {name:"Lionel Messi", likes:0, dislikes:0},
            {name:"Diego Maradona", likes:0, dislikes:0},
            {name:"Zinedine Zidane", likes:0, dislikes:0},
            {name:"Franz Beckenbauer", likes:0, dislikes:0}
        ];
        
        $scope.footballers=footballers;

        $scope.incrLikes=function(f){
            f.likes++;
        }
        $scope.incrDislikes=function(f){
            f.dislikes++;
        }
        
        $scope.appTitle='Ng-Click in AngularJS';
        $scope.message="Hello Angular";
});
