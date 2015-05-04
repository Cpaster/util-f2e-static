var angular = require("angular");

require('angular-route');
require('./controller/_index.js');
require("./services/_index.js");
require("./directive/_index.js");

angular.element(document).ready(function(){

	var requires = [
		'ngRoute',
		'app.controllers',
		'app.services',
		'app.directives'
	];

	window.app = angular.module("app",requires);

	angular.module("app").config(require('./routes'));
	angular.bootstrap(document,['app']);
	
})