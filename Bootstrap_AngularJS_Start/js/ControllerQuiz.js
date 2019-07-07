var app = angular.module('Quizs', []);
app.controller('myCtrl', function($scope, $http) {
  var d=0;
  var count=0;
  var array=[];
  var i;
  $scope.mydata;
  $http.get("../db/Quizs/ADAV.js").then(function(response){
    $scope.mydata=response.data;
    $scope.question=$scope.mydata[d].Text;
    $scope.answer1=$scope.mydata[d].Answers[0].Text;
    $scope.answer2=$scope.mydata[d].Answers[1].Text;
    $scope.answer3=$scope.mydata[d].Answers[2].Text;
    $scope.answer4=$scope.mydata[d].Answers[3].Text;

    $scope.Id1=$scope.mydata[d].Answers[0].Id;
    $scope.Id2=$scope.mydata[d].Answers[1].Id;
    $scope.Id3=$scope.mydata[d].Answers[2].Id;
    $scope.Id4=$scope.mydata[d].Answers[3].Id;
  })
  $http.get("../db/Quizs/ADAV.js").then(function(response){
    $scope.mydata=response.data;
    angular.forEach($scope.mydata, function(item){
             count=count+1;
         })
         $scope.questionNumber= (d+1)+' / '+count;
  })
  i=0;


  $scope.prev= function(){
    if(d>0 && i>0){
    d=d-1;
    i=i-1;
    $scope.mydata;
    $http.get("../db/Quizs/ADAV.js").then(function(response){
      $scope.mydata=response.data;
      if($scope.answer==$scope.mydata[d].AnswerId){
        array[i]=1;
      }
      else {
        array[i]=0;
      }

      if(d<count){
        $http.get("../db/Quizs/ADAV.js").then(function(response){
          $scope.mydata=response.data;
          $scope.question=$scope.mydata[d].Text;
          $scope.answer1=$scope.mydata[d].Answers[0].Text;
          $scope.answer2=$scope.mydata[d].Answers[1].Text;
          $scope.answer3=$scope.mydata[d].Answers[2].Text;
          $scope.answer4=$scope.mydata[d].Answers[3].Text;

          $scope.Id1=$scope.mydata[d].Answers[0].Id;
          $scope.Id2=$scope.mydata[d].Answers[1].Id;
          $scope.Id3=$scope.mydata[d].Answers[2].Id;
          $scope.Id4=$scope.mydata[d].Answers[3].Id;
        })
        $scope.questionNumber= (d+1)+' / '+count;
      }
    });
  }
}


  $scope.next= function(){
    $scope.mydata;
    $http.get("../db/Quizs/ADAV.js").then(function(response){
      $scope.mydata=response.data;
      if($scope.answer==$scope.mydata[d].AnswerId){
        array[i]=1;
      }
      else {
        array[i]=0;
      }
      d=d+1;
      i=i+1;
      if(d<count){
        $http.get("../db/Quizs/ADAV.js").then(function(response){
          $scope.mydata=response.data;
          $scope.question=$scope.mydata[d].Text;
          $scope.answer1=$scope.mydata[d].Answers[0].Text;
          $scope.answer2=$scope.mydata[d].Answers[1].Text;
          $scope.answer3=$scope.mydata[d].Answers[2].Text;
          $scope.answer4=$scope.mydata[d].Answers[3].Text;

          $scope.Id1=$scope.mydata[d].Answers[0].Id;
          $scope.Id2=$scope.mydata[d].Answers[1].Id;
          $scope.Id3=$scope.mydata[d].Answers[2].Id;
          $scope.Id4=$scope.mydata[d].Answers[3].Id;
        })
        $scope.questionNumber= (d+1)+' / '+count;
      }
      else {
        var myEl = angular.element( document.querySelector( '#remove' ) );
        myEl.remove();
          var c=0;
          for(i=0;i<array.length;i++){
            if(array[i]==1)
              c=c+1;
            }
          $scope.result='Bạn đã làm đúng: '+c + ' / ' + count;
        }
    })
  }

});
