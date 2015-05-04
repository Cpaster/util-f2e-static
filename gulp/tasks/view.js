var gulp = require("gulp");
var config = require("../config");

gulp.task("view", function(){

	return gulp.src(config.views.src)
			.pipe(gulp.dest(config.views.dest))

})