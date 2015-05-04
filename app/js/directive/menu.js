
var directiveModule = require("./_index.js");

function Menu(){
	return {
		resstict: 'AEC',
		scope: {},
		controller: function($scope, $element,$location){
			$scope.menu = [
								{
									"index": 0,
									"link": "#/",
									"name": '首页'
								},
								{
									"index": 1,
									"link": '#/add',
									"name": "添加文档"
								}
							];

			var path = $location.$$path;
			$scope.num = 0;

			for(var i = 1; i < $scope.menu.length; i++){
				var link = $scope.menu[i].link;
				if(("#" + path).indexOf(link) != -1){
					$scope.num = i;
				}
			}

			console.log($scope.num);

			$scope.sIndex = function(index){
				$scope.num = index;
			}

		},
		templateUrl: 'build/view/menu.html',

		// link: function(scope, element, attrs, ctrls){
			
		// },

	}
};

directiveModule.directive("mMenu", Menu);