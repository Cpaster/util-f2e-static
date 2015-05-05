var controllerModule = require("./_index.js");

function update($scope,$location){

	$scope.list = [{
		"index": 1,
		"name": "angular",
	},
	{
		"index": 2,
		"name": "angular2"
	}]

	$scope.editFuc = function(index){
		
	}

	$scope.delFuc = function(index){
		
	}

}

controllerModule.controller("updateControll", update);

