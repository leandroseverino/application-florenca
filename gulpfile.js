var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');

gulp.task('clean', function() {
    return gulp.src('dist/')
    .pipe(clean());
});

gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglifly', function() {
    return es.merge([
        gulp.src(['lib/angular/angular.min.js',
                  'lib/angular-messages/angular-messages.min.js',
                  'lib/angular-route/angular-route.min.js',
                  'js/jquery.js',
                  'js/bootstrap.min.js']),
        gulp.src(['js/app.js',
                  'js/controllers/*.js',
                  'js/services/*.js',
                  'js/value/*.js',
                  'js/config/routeConfig.js']).pipe(concat('scripts.js')).pipe(uglify())
    ])
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function () {
    return gulp.src('view/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/view'))
});

gulp.task('cssmin', function () {
    return es.merge([
        gulp.src(['css/bootstrap.min.css', 'font-awesome/css/font-awesome.min.css']),
        gulp.src(['css/modern-business.css']).pipe(cleanCSS())
    ])
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
    return gulp.src('index-prod.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy_imgs', function() {
    return gulp.src(['img/**/*'])
    .pipe(gulp.dest('dist/img'))
});

gulp.task('copy_fonts', function() {
    return gulp.src(['fonts/*', 'font-awesome/fonts/*'])
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('default', function(cb) {
    return runSequence('clean', ['uglifly', 'htmlmin', 'cssmin', 'copy', 'copy_imgs', 'copy_fonts'], cb)
});
