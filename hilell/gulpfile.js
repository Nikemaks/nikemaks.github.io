const {task, parallel, series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssnano'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sassLint = require('gulp-sass-lint'),
    sourcemaps = require('gulp-sourcemaps');
// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
runSequence = require('run-sequence');


var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};

var sassOptions = {
  outputStyle: 'expanded'
};

var prefixerOptions = {
  browsers: ['last 2 versions']
};

// BUILD SUBTASKS
// ---------------

task('styles', series(() => {
  return src('sass/main.sass')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(prefix(prefixerOptions))
    .pipe(rename('main.css'))
    .pipe(dest('css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('css'))
}));

task('sass-lint', function() {
  src('sass/**/*.sass')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

task('watch', parallel(() => {
  watch('sass/**/*.sass', series('styles'));
}));

// BUILD TASKS
// ------------

task('default', function(done) {
  runSequence('styles', 'watch', done);
});

task('build', function(done) {
  runSequence('styles', done);
});