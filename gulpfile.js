"use strict"

var gulp   = require("gulp")

// ━━━━━━━━━━━━━━━━━━━━━━
// Build JS/TS
// ━━━━━━━━━━━━━━━━━━━━━━
var exec = require('child_process').exec

gulp.task('buildjs', function (cb) {
  exec('npm run build', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Transpile Sassy CSS
// ━━━━━━━━━━━━━━━━━━━━━━
function exceptionLog (error) {
  console.log(error.toString())
  this.emit('end')
}

var sass = require('gulp-sass')
gulp.task('styles', function () {
  return gulp.src('./styles/styles.scss')
    .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
    .pipe(gulp.dest('./docs/assets/styles/'))
    .on('error', exceptionLog)
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Convert settings
// ━━━━━━━━━━━━━━━━━━━━━━
var Hjson = require('gulp-hjson')
 
gulp.task('convert-hjson-to-json', ['make-settings'], function() {
  return gulp.src(['./hjson/**/*'])
    .pipe(Hjson({ to: 'json' }))
    .pipe(gulp.dest('./docs/assets/json/'))
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Make settings with env
// ━━━━━━━━━━━━━━━━━━━━━━
var replace = require('gulp-replace')
var env = require('node-env-file')
env('.env')

gulp.task('make-settings', function() {
  return gulp
          .src(['./settings.hjson'])
          .pipe(replace('%%GOOGLE_MAP_API_KEY%%', process.env.GOOGLE_MAP_API_KEY))
          .pipe(replace('%%GOOGLE_ANALYTICS_ID%%', process.env.GOOGLE_ANALYTICS_ID))
          .pipe(gulp.dest('./hjson/'))
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Default
// ━━━━━━━━━━━━━━━━━━━━━━
gulp.task("default", ["buildjs","styles","convert-hjson-to-json"])

// ━━━━━━━━━━━━━━━━━━━━━━
// Launch test server
// ━━━━━━━━━━━━━━━━━━━━━━
var connect = require('gulp-connect')
gulp.task('connect', function() {
  connect.server({
    root: './docs',
    livereload: true
  })
})