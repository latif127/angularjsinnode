<!doctype html>
<html lang="en" ng-app="myapp">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
    <script src="js/script1.js"></script>
    <title>AngularJS</title>
  </head>
  <body> 
      <div class="container" ng-controller="myctrl">
        <h3 class="text-center">{{appTitle}}</h3>
        <div class="row">
          <div class="col mt-25">
              <label>Name</label>
              <input type="text" name="name" ng-model="newStudent.name"/>
              <label>Address</label>
              <input type="text" name="address" ng-model="newStudent.address"/>
              <label>Dept.</label>
              <input type="text" name="dept" ng-model="newStudent.dept"/>
              <br/>
              <input type="hidden" ng-model="newStudent.id" />
              <input type="button" value="Save" ng-click="saveRecord()" class="btn btn-primary"/>
              <br />
              <br />
       
              <table class="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Dept</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="student in students">
                        <td>{{student.name}}</td>
                        <td>{{student.address}}</td>
                        <td>{{student.dept}}</td>
                        <td>
                          <a  href="#" ng-click="edit(student.id)">edit</a> | 
                          <a href="#" ng-click="delete(student.id)">delete</a>
                        </td>
                    </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>