var gulp   = require("gulp")

// ━━━━━━━━━━━━━━━━━━━━━━
// Precompile riot.js
// ━━━━━━━━━━━━━━━━━━━━━━
var riot = require('gulp-riot'); 
var sass = require('node-sass');
gulp.task('riot', function() {  
    // Compile views
    var tags = [
        './lib/views/**/*.tag'
    ]
    return gulp.src(tags)
        .pipe(
            riot({
                // expr:true,
                // modular:true,
                //type:"typescript",
                parsers:{
                    css:{
                        scss: function(tagName, css) {
                            var result = sass.renderSync({ data: css })
                            return result.css.toString()
                        },
                    }
                }// ,
                // parserOptions:{
                //     js: {
                //         module: 5, //commonjs
                //         babelrc: false,
                //         presets: ["es2015-riot", ["latest-node6", { "es2015": false }]],
                //         plugins: ["add-module-exports", "transform-runtime"],
                //     }
                // }
            })
        )
        .pipe(concat("view.js"))
        .pipe(gulp.dest('./lib/builds/'))
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Transpile TypeScript
// ━━━━━━━━━━━━━━━━━━━━━━
var typescript = require('gulp-typescript') // gulp typescript plugin
var tslint   = require('gulp-tslint')
var tsconfig = require('./tsconfig.json') 
gulp.task('ts', function() {
    // Compile logics
    var files = [ 
      './lib/typings/**/*.ts',
      './lib/logic/Foundation/**/*.ts',
      './lib/logic/Domain/**/*.ts',
      './lib/logic/Service/**/*.ts',
      './lib/logic/main.ts'
    ]
    return gulp.src(files)
        .pipe(typescript(tsconfig.compilerOptions)).js
        .pipe(concat("logic.js"))
        .pipe(gulp.dest('./lib/builds/')) 
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Make bundle of JS 
// ━━━━━━━━━━━━━━━━━━━━━━
var concat = require("gulp-concat")  // bundler
var uglify = require("gulp-uglify")  // minify
gulp.task('js', ["riot", "ts"], function() {
    return gulp.src('./lib/builds/*.js')
        .pipe(concat("application.js"))
        //.pipe(uglify({compress: true, mangle: true }))
        .pipe(gulp.dest('./docs/assets/js/')) 
})

// ━━━━━━━━━━━━━━━━━━━━━━
// Default
// ━━━━━━━━━━━━━━━━━━━━━━
gulp.task("default", ["js"])
