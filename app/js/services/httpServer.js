var serviceModule = require("./_index.js");

function httpService($q, $http) {
	var service = {};

	service.get = function(obj,cb){

		var deferred = $q.defer();

		$http(obj).success(function(data){

			cb && cb(data);

			deferred.resolve(data);
		}).error(function(err, status){
			deferred.reject(err, status);
		})

		return deferred.promise;

	}

	return service;
}

serviceModule.service("httpService", httpService);