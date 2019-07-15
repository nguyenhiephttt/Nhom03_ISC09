var app = angular.module('Quizs', ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.html",
    controller : "mainController"
  })
  .when("/test1", {
    templateUrl : "test/test.html",
    controller : "myCtrl"
  })
  .when("/test2", {
    templateUrl : "test/test.html",
    controller : "myCtrl1"
  })
  .when("/test3", {
    templateUrl : "test/test.html",
    controller : "myCtrl2"
  })
  .when("/test4", {
    templateUrl : "test/test.html",
    controller : "myCtrl3"
  })
  .when("/suggest", {
    templateUrl : "suggest/suggest.html",
  })

  .when("/register", {
    templateUrl : "register/register.html",
  })
  .when("/login", {
    templateUrl : "login/login.html",
  })

});
app.controller("mainController", function ($scope, $http) {

    $http.get('../db/Subjects.js').then(function (response) {
        // console.log("cccccccccccc");
        $scope.mydata=response.data;
    });
});
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
    i=i-3;
    $scope.mydata;
    $http.get("../db/Quizs/ADAV.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })

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
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })
      d=d+1;
      i=i+3;
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
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1])
              c=c+1;
            }
          $scope.result='Bạn đã làm đúng: '+c + ' / ' + count;
          $scope.status;
          if(c<=30){
            $scope.status="bạn ngu quá"
          }
          else if(c<=50){
            $scope.status="bạn ok"
          }
          else if(c<=70){
            $scope.status="bạn giỏi"
          }
          else if(c<=75){
            $scope.status="ăn cl gì giỏi vậy"
          }

          $scope.answerResult=[];
          var j=0;
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1]){
              $scope.answerResult.push("Câu " + (j+1) + ": Đúng");
            }

            else {

              $scope.answerResult.push("Câu " + (j+1) + ": Sai. Kết quả đúng là: "+array[i+2]);


            }
            j=j+1;
        }
      }
    })
  }

});
app.controller('myCtrl1', function($scope, $http) {
  var d=0;
  var count=0;
  var array=[];
  var i;
  $scope.mydata;
  $http.get("../db/Quizs/ADBS.js").then(function(response){
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
  $http.get("../db/Quizs/ADBS.js").then(function(response){
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
    i=i-3;
    $scope.mydata;
    $http.get("../db/Quizs/ADBS.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })

      if(d<count){
        $http.get("../db/Quizs/ADBS.js").then(function(response){
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
    $http.get("../db/Quizs/ADBS.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })
      d=d+1;
      i=i+3;
      if(d<count){
        $http.get("../db/Quizs/ADBS.js").then(function(response){
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
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1])
              c=c+1;
            }
          $scope.result='Bạn đã làm đúng: '+c + ' / ' + count;
          $scope.status;
          if(c<=30){
            $scope.status="bạn ngu quá"
          }
          else if(c<=50){
            $scope.status="bạn ok"
          }
          else if(c<=70){
            $scope.status="bạn giỏi"
          }
          else if(c<=75){
            $scope.status="ăn cl gì giỏi vậy"
          }

          $scope.answerResult=[];
          var j=0;
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1]){
              $scope.answerResult.push("Câu " + (j+1) + ": Đúng");
            }

            else {

              $scope.answerResult.push("Câu " + (j+1) + ": Sai. Kết quả đúng là: "+array[i+2]);


            }
            j=j+1;
        }
      }
    })
  }

});
app.controller('myCtrl2', function($scope, $http) {
  var d=0;
  var count=0;
  var array=[];
  var i;
  $scope.mydata;
  $http.get("../db/Quizs/ADTE.js").then(function(response){
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
  $http.get("../db/Quizs/ADTE.js").then(function(response){
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
    i=i-3;
    $scope.mydata;
    $http.get("../db/Quizs/ADTE.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })

      if(d<count){
        $http.get("../db/Quizs/ADTE.js").then(function(response){
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
    $http.get("../db/Quizs/ADTE.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })
      d=d+1;
      i=i+3;
      if(d<count){
        $http.get("../db/Quizs/ADTE.js").then(function(response){
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
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1])
              c=c+1;
            }
          $scope.result='Bạn đã làm đúng: '+c + ' / ' + count;
          $scope.status;
          if(c<=30){
            $scope.status="bạn ngu quá"
          }
          else if(c<=50){
            $scope.status="bạn ok"
          }
          else if(c<=70){
            $scope.status="bạn giỏi"
          }
          else if(c<=75){
            $scope.status="ăn cl gì giỏi vậy"
          }

          $scope.answerResult=[];
          var j=0;
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1]){
              $scope.answerResult.push("Câu " + (j+1) + ": Đúng");
            }

            else {

              $scope.answerResult.push("Câu " + (j+1) + ": Sai. Kết quả đúng là: "+array[i+2]);


            }
            j=j+1;
        }
      }
    })
  }

});
app.controller('myCtrl3', function($scope, $http) {
  var d=0;
  var count=0;
  var array=[];
  var i;
  $scope.mydata;
  $http.get("../db/Quizs/ADUI.js").then(function(response){
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
  $http.get("../db/Quizs/ADUI.js").then(function(response){
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
    i=i-3;
    $scope.mydata;
    $http.get("../db/Quizs/ADUI.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })

      if(d<count){
        $http.get("../db/Quizs/ADUI.js").then(function(response){
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
    $http.get("../db/Quizs/ADUI.js").then(function(response){
      $scope.mydata=response.data;
      array[i]=$scope.answer
      array[i+1]=$scope.mydata[d].AnswerId
      angular.forEach($scope.mydata[d].Answers, function(item){
               if(item.Id==array[i+1]){
                array[i+2]=item.Text;

              }
           })
      d=d+1;
      i=i+3;
      if(d<count){
        $http.get("../db/Quizs/ADUI.js").then(function(response){
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
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1])
              c=c+1;
            }
          $scope.result='Bạn đã làm đúng: '+c + ' / ' + count;
          $scope.status;
          if(c<=30){
            $scope.status="bạn ngu quá"
          }
          else if(c<=50){
            $scope.status="bạn ok"
          }
          else if(c<=70){
            $scope.status="bạn giỏi"
          }
          else if(c<=75){
            $scope.status="ăn cl gì giỏi vậy"
          }

          $scope.answerResult=[];
          var j=0;
          for(i=0;i<array.length;i=i+3){
            if(array[i]==array[i+1]){
              $scope.answerResult.push("Câu " + (j+1) + ": Đúng");
            }

            else {

              $scope.answerResult.push("Câu " + (j+1) + ": Sai. Kết quả đúng là: "+array[i+2]);


            }
            j=j+1;
        }
      }
    })
  }

});
