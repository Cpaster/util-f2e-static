var gulp = require("gulp");
var less = require('gulp-less');
var config = require("../config");

gulp.task('less', function() {
    gulp.src(config.styles.src).
        pipe(less({})).
        pipe(gulp.dest(config.styles.dest));
});