function Routes($routeProvider) {

	$routeProvider
		.when('/',{
			"templateUrl": 'build/view/list.html',
			'controller': "listControll"
		})
		.when('/update',{
			'templateUrl': 'build/view/update.html',
			'controller': 'updateControll'
		})
		.when('/add',{
			"templateUrl": 'build/view/add.html',
			"controller": "formControll"
		})
		.otherwise({
			redirectTo: '/'
		})
}

module.exports = Routes;