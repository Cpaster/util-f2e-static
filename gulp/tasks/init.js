var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("init", function(cb){

	runSequence("clean",["cssinit"],cb);

});