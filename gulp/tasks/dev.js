var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("dev", function(cb){

	var cb = cb || function(){};
	
	runSequence(['less','browserify','view'],cb);

});