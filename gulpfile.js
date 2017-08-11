"use strict";

var gulp   = require("gulp")

// // ━━━━━━━━━━━━━━━━━━━━━━
// // Precompile riot.js
// // ━━━━━━━━━━━━━━━━━━━━━━
// var riot = require('gulp-riot'); 
// var sass = require('node-sass');
// gulp.task('riot', function() {  
//     // Compile views
//     var tags = [
//         './src/views/**/*.tag'
//     ]
//     return gulp.src(tags)
//         .pipe(
//             riot({
//                 // expr:true,
//                 // modular:true,
//                 //type:"typescript",
//                 parsers:{
//                     css:{
//                         scss: function(tagName, css) {
//                             var result = sass.renderSync({ data: css })
//                             return result.css.toString()
//                         },
//                     }
//                 }// ,
//                 // parserOptions:{
//                 //     js: {
//                 //         module: 5, //commonjs
//                 //         babelrc: false,
//                 //         presets: ["es2015-riot", ["latest-node6", { "es2015": false }]],
//                 //         plugins: ["add-module-exports", "transform-runtime"],
//                 //     }
//                 // }
//             })
//         )
//         .pipe(concat("view.js"))
//         .pipe(gulp.dest('./src/builds/'))
// })

// // ━━━━━━━━━━━━━━━━━━━━━━
// // Transpile TypeScript
// // ━━━━━━━━━━━━━━━━━━━━━━
// var typescript = require('gulp-typescript') // gulp typescript plugin
// var tslint   = require('gulp-tslint')
// var tsconfig = require('./tsconfig.json') 
// gulp.task('ts', function() {
//     // Compile logics
//     var files = [ 
//       './src/typings/**/*.ts',
//       './src/logic/Foundation/**/*.ts',
//       './src/logic/Domain/**/*.ts',
//       './src/logic/Service/**/*.ts',
//       './src/logic/main.ts'
//     ]
//     return gulp.src(files)
//         .pipe(typescript(tsconfig.compilerOptions)).js
//         .pipe(concat("logic.js"))
//         .pipe(gulp.dest('./src/builds/')) 
// })

// // ━━━━━━━━━━━━━━━━━━━━━━
// // Make bundle of JS 
// // ━━━━━━━━━━━━━━━━━━━━━━
// var concat = require("gulp-concat")  // bundler
// var uglify = require("gulp-uglify")  // minify
// gulp.task('js', ["riot", "ts"], function() {
//     return gulp.src('./src/builds/*.js')
//         .pipe(concat("application.js"))
//         //.pipe(uglify({compress: true, mangle: true }))
//         .pipe(gulp.dest('./docs/assets/js/')) 
// })

// Delete later.
// gulp-riot
// gulp-uglify
// gulp-typescript
// gulp-tslint
// gulp-concat

// ━━━━━━━━━━━━━━━━━━━━━━
// Build JS/TS
// ━━━━━━━━━━━━━━━━━━━━━━
var exec = require('child_process').exec;

gulp.task('buildjs', function (cb) {
  exec('npm run build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Transepile Sassy CSS
// ━━━━━━━━━━━━━━━━━━━━━━
function exceptionLog (error) {
  console.log(error.toString());
  this.emit('end');
}

var sass = require('gulp-sass')
gulp.task('styles', function () {
  return gulp.src('./styles/styles.scss')
    .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
    .pipe(gulp.dest('./docs/assets/styles/'))
    .on('error', exceptionLog);
});

// ━━━━━━━━━━━━━━━━━━━━━━
// Convert settings
// ━━━━━━━━━━━━━━━━━━━━━━
var Hjson = require('gulp-hjson');
 
gulp.task('settings', function() {
  return gulp.src(['./settings/settings.hjson'])
    .pipe(Hjson({ to: 'json' }))
    .pipe(gulp.dest('./docs/assets/json/'));
});


// ━━━━━━━━━━━━━━━━━━━━━━
// Default
// ━━━━━━━━━━━━━━━━━━━━━━
gulp.task("default", ["buildjs","styles","settings"])
