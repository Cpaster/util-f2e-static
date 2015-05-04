var gulp = require("gulp");
var fs = require('fs');
var path = require("path");
var config = require("../config");

gulp.task("cssinit",function(e){

	for(var i in config.cssDependencies){

		var text = "";

		config.cssDependencies[i].forEach(function(path){

			text += '@import ' + '"'+ path + '";\n';

		});

		mkdirSync("app/less/comm/");
		fs.writeFileSync("app/less/comm/" + i + ".less", text);

	}

	function mkdirSync(url,mode,cb){

	    var path = require("path"), arr = url.split("/");
	    mode = mode || 0755;
	    cb = cb || function(){};
	    if(arr[0]==="."){
	        arr.shift();
	    }
	    if(arr[0] == ".."){
	        arr.splice(0,2,arr[0]+"/"+arr[1])
	    }
	    function inner(cur){
	        if(!fs.existsSync(cur)){
	            fs.mkdirSync(cur, mode)
	        }
	        if(arr.length){
	            inner(cur + "/"+arr.shift());
	        }else{
	            cb();
	        }
	    }
	    arr.length && inner(arr.shift());
	}

})