


var SDtopspots = angular.module('SanDiegoTopSpots',[]);


SDtopspots.controller('myCtrl', function($scope,$http){

$http.get("topspots.json").then(function(populate){


$scope.whatever = populate.data.topspots;

});

});