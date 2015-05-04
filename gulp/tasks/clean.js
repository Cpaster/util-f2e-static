var gulp = require("gulp");
var clean = require("del");

gulp.task("clean", function(cb){

	clean(["./less/comm"],cb);

});