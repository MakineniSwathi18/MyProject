
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/welcome.html"
    })
    .when("/Profile", {
        templateUrl : "views/profile.html"
    })
    .when("/BodyWeight", {
        templateUrl : "views/weight.html"
    })
    
});
app.controller("myCtrl",function($scope){
    
$scope.lineData=
  {
            labels: ["", "", "", "", "", "","", "", ""],          
            datasets: [{
                label: "Today",
                data: [250,170,160,190,195,120,115,60,115, 10, 10,10],  
                borderColor:"#5a9fc7",
                borderWidth:"2",
                pointRadius:"0",
                 backgroundColor:"rgba(18, 144, 218, 0.28)"             
              //  lineTension:0
                
            }, {
                label: "Avg",
                data: [100,75,67,50,80,60,80,100,40, 20, 40, 40],             
                backgroundColor:"rgba(195, 207, 214, 0)",
                borderColor:"#ccc",
                borderWidth:"2",
                pointRadius:"0",
            }]
        };

        $scope.steeplineData={
            labels: ["", "", "", "", "", ""],          
            datasets: [{
                label: "",
                data: [250,200,180,210,180,140],  
                borderColor:"#5a9fc7",
                borderWidth:"2",
                pointRadius:"0",
                backgroundColor:"rgba(18, 144, 218, 0.28)" ,            
                lineTension:0
                
            }]
        }
          $scope.steeplineData.datasets[0].data[1].fillColor =   "rgba(000,111,111,55)" ; 
});