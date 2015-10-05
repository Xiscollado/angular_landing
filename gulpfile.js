var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var templateCache = require('gulp-angular-templatecache');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jshint = require('gulp-jshint');
var Server = require('karma').Server;
var protractor = require("gulp-protractor").protractor;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['verbose']
  }, done).start();
});

gulp.task('e2e', function (){
  gulp.src(["./e2e/*.js"])
      .pipe(protractor({
          configFile: "conf.js"
      }))
      .on('error', function(e) { throw e })
})

gulp.task("createJS", function() {
    gulp.src(['./app/app.js','./app/routes.js','./app/components/**/*.js','./app/shared/**/*.js','./assets/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat("production.js"))
    .pipe(uglify({mangle: false}))
    .pipe(rename({extname: ".min.js"}))
    .pipe(gulp.dest("dist/assets/js"))
});

gulp.task("cacheTemplates", function(){
  gulp.src(['./app/components/**/*.html','./app/shared/**/*.html'])
  .pipe(templateCache({module:'app',standalone: false, root:'app/components/'}))
  .pipe(gulp.dest('dist/assets/js'));

});

gulp.task('createLESS', function () {
  gulp.src('./assets/less/**/main.less')
  .pipe(less())
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('createIMAGES', function () {
    return gulp.src('assets/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('deploy', ['createJS', 'cacheTemplates', 'createLESS','createIMAGES']);