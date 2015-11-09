var gulp = require('gulp'),
    browserSync = require('browser-sync'),

    $ = require('gulp-load-plugins')(),

    jsFiles = ['gulpfile.js', 'src/**/*.js'],
    testFiles = ['test/**/*.js'];


/**
 * Linting
 *
 * Tests for code quality and source standards.
 */
gulp.task('jshint', function() {
    return gulp.src(jsFiles)
        .pipe(browserSync.reload({
            stream : true,
            once   : true
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});


/**
 * Code Style
 *
 * Tests for code style accuracy.
 */
gulp.task('eslint', function() {
    return gulp.src(jsFiles)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failOnError());
});


/**
 * Test
 *
 * Tests the application.
 */
gulp.task('test', ['jshint', 'eslint'], function() {
    return gulp.src(testFiles)
        .pipe($.mocha());
});


/**
 * Setup-Coverage
 *
 * Sets up istanbul for watching tests.
 */
gulp.task('setup-coverage', function() {
    return gulp.src(jsFiles)
        .pipe($.istanbul())
        .pipe($.istanbul.hookRequire())
        .pipe(gulp.dest('coverage/'));
});


/**
 * Coverage
 *
 * Runs a coverage report for the tests.
 */
gulp.task('coverage', ['setup-coverage'], function() {
    return gulp.src(testFiles)
        .pipe($.mocha())
        .pipe($.istanbul.writeReports());
});
