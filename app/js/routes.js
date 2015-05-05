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
		.when('/edit/:id',{
			'templateUrl': 'build/view/add.html',
			'controller': 'detailControll'
		})
		.otherwise({
			redirectTo: '/'
		})
}

module.exports = Routes;