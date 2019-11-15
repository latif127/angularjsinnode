var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope){
        
        var students=[{
            id:1,
            name: 'John Doe',
            address: '111 Main St',
            dept: 'Chemistry'
        }];
        var id=0;

        $scope.appTitle='CRUD in AngularJS';
        $scope.students=students;
        $scope.id=id;

        

        $scope.saveRec=function(){
            if($scope.newStudent.id==null){
                $scope.newStudent.id=$scope.id++;
                //$scope.id=$scope.newStudent.id;
                $scope.students.push($scope.newStudent);
            }else{
                for(i in $scope.students){
                    if($scope.students[i].id==$scope.newStudent.id){
                        $scope.students[i]=$scope.newStudent;
                    }
                }
            }
            $scope.newStudent={};
        };

        $scope.editRec=function(id){
            for(i in $scope.students){
                if($scope.students[i].id==id){
                    $scope.newStudent=angular.copy($scope.students[i]);
                }
            }

        };

        $scope.deleteRec=function(id){
            for(i in $scope.students){
                if($scope.students[i].id==id){
                    $scope.students.splice(i,1);
                }
            }
            $scope.newStudent={};
        };

        $scope.cancelRec=function(){
            $scope.newStudent={};
        };
        
});
