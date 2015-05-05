var controllerModule = require("./_index.js");

function detailController($scope, $routeParams, httpService){
	var data = httpService.get({url: "./mockserver/edit-item.json", method: 'GET', data: { id: $routeParams.id }},function(data){
		renderForm(data);
	});

	function renderForm(data){

		if(data.code == 200){
			$scope.deal = data.msg;
		}
	}

}

controllerModule.controller("detailControll", detailController);