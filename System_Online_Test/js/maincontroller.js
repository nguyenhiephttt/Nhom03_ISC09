var app = angular.module('mainApp',[]);
app.controller("mainController", function ($scope, $http) {

    $http.get('../db/Subjects.json').then(function (response) {
        // console.log("cccccccccccc");
        $scope.mydata=response.data.Subjects;
    });
});

