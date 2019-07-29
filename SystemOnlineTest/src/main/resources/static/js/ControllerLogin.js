var app = angular.module('Login', []);

app.controller('myCtrl', function($scope, $http,$window) {
  $scope.checkform= function(){
      $scope.Username;
      $scope.Userpass;
      $scope.mydata;
      $http.get("../db/Students.js").then(function(response){
        var d=0;
        $scope.mydata=response.data;
        angular.forEach($scope.mydata, function(item){
                 if($scope.Username==item.email && $scope.Userpass==item.password){
                   alert("Đăng nhập thành công");
                   d=d+1;
                   $window.location.href= '#';
                 }
             })
             if(d==0){
               alert("Đăng nhập thất bại");
                $window.location.href= '#!login';
             }
      });
    }
});
