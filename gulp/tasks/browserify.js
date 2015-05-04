var _browserify = require("browserify");
var gulp  = require("gulp");
var source = require('vinyl-source-stream');
var debowerify  = require('debowerify');
var ngAnnotate   = require('browserify-ngannotate');
var config = require("../config");

gulp.task("browserify", function(e){
	var b = _browserify({
		entries: config.script.src
	})

	var transforms = [
		ngAnnotate,
		'bulkify'
	];

	transforms.forEach(function(transform){
		b.transform(transform);
	});

	var stream = b.bundle();

	stream.pipe(source("main.js"))
	.pipe(gulp.dest(config.script.dest));
})
