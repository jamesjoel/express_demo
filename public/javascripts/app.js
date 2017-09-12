var app=angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$http({
		method : "GET",
		url : "/getall"
	}).then(function(res){
		// console.log("Hello");
		console.log(res.data);
	});
	$scope.name="Rohit";
});