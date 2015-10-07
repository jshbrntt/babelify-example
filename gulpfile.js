var babelify    = require('babelify');
var browserify  = require('browserify');
var bs          = require('browser-sync').create();
var del         = require('del');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var source      = require('vinyl-source-stream');
var watchify    = require('watchify');

gulp.task('browser-sync', function () {
 bs.init({
   open: false,
   server: {
     baseDir: './dist'
   }
 });
});

gulp.task('clean', function () {
  del([
    'dist/**/*',
  ]);
});

var scripts = {
 b: browserify('./src/index.js', {
   debug: false
 }),
 build: function () {
   gutil.log('🕒 ', gutil.colors.yellow('Building Scripts...'));
   return scripts.b
     .transform(babelify)
     .bundle()
     .on('error', gutil.log.bind(gutil, '❌ ', gutil.colors.red('Error:')))
     .pipe(source('bundle.js'))
     .pipe(gulp.dest("./dist"));
 },
 reload: function () {
   return scripts.build()
     .pipe(bs.stream());
 },
 watch: function () {
   watchify(scripts.b)
     .on('update', scripts.reload)
     .on('time', function (time) {
       gutil.log('✅ ', gutil.colors.green('Built Scripts in'), gutil.colors.cyan(time + 'ms'));
     });
   return scripts.reload();
 }
};

gulp.task('build-scripts', ['clean'], scripts.build);
gulp.task('watch-scripts', ['browser-sync'], scripts.watch);
gulp.task('reload-scripts', scripts.reload);

gulp.task('default', ['watch-scripts']);
