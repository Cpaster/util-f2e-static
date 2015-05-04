var controllerModule = require("./_index.js");

function listController($scope,httpService){

	var data = httpService.get({url: "./mockserver/list.json", method: 'GET'},function(data){
		$scope.list = data.msg.list;
	});

}

controllerModule.controller("listControll", listController);