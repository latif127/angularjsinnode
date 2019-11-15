var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope){
        var employees=[{name:'Maria Anders',position:'Sales Representative',address:'Obere Str. 57',city:'Berlin',country:'Germany', phone:'030-0074321'},
        {name:'Ana Trujillo',position:'Owner',address:'Avda. de la Constitución 2222',city:'México D.F.',country:'Mexico', phone:'(5) 555-4729'},
        {name:'Antonio Moreno',position:'Owner',address:'Mataderos  2312',city:'México D.F.',country:'Mexico', phone:'(5) 555-3932'},
        {name:'Thomas Hardy',position:'Sales Representative',address:'120 Hanover Sq.',city:'London',country:'UK', phone:'(171) 555-7788'},
        {name:'Christina Berglund',position:'Order Administrator',address:'Berguvsvägen  8',city:'Luleå',country:'Sweden', phone:'0921-12 34 65'},
        {name:'Hanna Moos',position:'Sales Representative',address:'Forsterstr. 57',city:'Mannheim',country:'Germany', phone:'0621-08460'},
        {name:'Frédérique Citeaux',position:'Marketing Manager',address:'24, place Kléber',city:'Strasbourg',country:'France', phone:'88.60.15.31'},
        {name:'Martín Sommer',position:'Owner',address:'C/ Araquil, 67',city:'Madrid',country:'Spain', phone:'(91) 555 22 82'},
        {name:'Laurence Lebihan',position:'Owner',address:'12, rue des Bouchers',city:'Marseille',country:'France', phone:'91.24.45.40'},
        {name:'Elizabeth Lincoln',position:'Accounting Manager',address:'23 Tsawassen Blvd.',city:'Tsawassen',country:'Canada', phone:'(604) 555-4729'},
        {name:'Victoria Ashworth',position:'Sales Representative',address:'Fauntleroy Circus',city:'London',country:'UK', phone:'(171) 555-1212'},
        {name:'Patricio Simpson',position:'Sales Agent',address:'Cerrito 333',city:'Buenos Aires',country:'Argentina', phone:'(1) 135-5555'},
        {name:'Francisco Chang',position:'Marketing Manager',address:'Sierras de Granada 9993',city:'México D.F.',country:'Mexico', phone:'(5) 555-3392'},
        {name:'Yang Wang',position:'Owner',address:'Hauptstr. 29',city:'Bern',country:'Switzerland', phone:'0452-076545'}];
        
        $scope.employees=employees;
        $scope.appTitle='Ng-Repeat in AngularJS';
        $scope.message="Hello Angular";
});
