var gulp = require('gulp'),
	watch = require('gulp-watch'),
	jsmin = require('gulp-jsmin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');

var files = [
		'./src/slimQuery.js',
		'./src/modules/*.js'
	];

gulp.task('build', function () {
    return gulp.src(files)
        	.pipe(concat('slimQuery.js'))
            .pipe(gulp.dest('dist'))
        	.pipe(jsmin())
        	.pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    return watch('./src/*.js', function () {
        gulp.src(files)
        	.pipe(concat('slimQuery.js'))
            .pipe(gulp.dest('dist'));
    });
});