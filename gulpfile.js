var coffee = require('gulp-coffee'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    coffeelint = require('gulp-coffeelint'),
    header = require('gulp-header'),
    uglify = require('gulp-uglify');

// build folder
var DEST = 'build/';

// Package info for header creation
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * version v<%= pkg.version %>',
  ' * link <%= pkg.homepage %>',
  ' * license <%= pkg.license %>',
  ' */',
  ''].join('\n');

// Build Task
gulp.task('build', function() {
  gulp.src('jquery.fillerup.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST))
});

// linter
gulp.task('lint-coffee', function () {
    gulp.src('jquery.fillerup.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

// Rerun the task when a file changes
gulp.task('watch-lint', function() {
  gulp.watch('jquery.fillerup.coffee', ['lint-coffee']);
});

gulp.task('lint', ['watch-lint', 'lint-coffee']);
gulp.task('default', ['build']);
