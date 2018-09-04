var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('source:compile', function(){
    return browserify('./source/js/app.js')
        .transform(babelify, { presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('./js/app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build/'));
});


gulp.task('default', ['source:compile']);