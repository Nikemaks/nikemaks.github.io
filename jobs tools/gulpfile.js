var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

  
gulp.task('browser-sync', function () {
  var files = [
    'app/**/*.html',
    'app/assets/css/**/*.css',
    'app/assets/imgs/**/*.png',
    'app/assets/js/**/*.js'
  ];
  
  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});
