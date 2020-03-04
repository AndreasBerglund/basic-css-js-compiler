const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const minify = require('gulp-clean-css');

const src_path =  'assets/scss/*.scss';
const dest_path =  'assets/css/min/';

function styles(cb) {

  gulp.src(src_path)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
  .pipe(minify({keepBreaks: false}))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(dest_path))

  cb();

}

gulp.task('watch', function(cb){
  gulp.watch([src_path], styles);
  cb();
});

exports.watch = gulp.task('watch');
exports.default = styles;