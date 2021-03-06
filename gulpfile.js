var gulp = require('gulp');
var gulp_concat = require('gulp-concat');
var gulp_babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('gulp_concat_css', function() {
  return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './src/css/custom.css', './src/css/sticky-footer-navbar.css'])
    .pipe(gulp_concat('all_css.css'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('gulp_copy_images', function() {
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('gulp_copy_json', function() {
  return gulp.src('./src/json/feed.json')
    .pipe(gulp.dest('./dist/json'));
});

gulp.task('gulp_copy_index_dist', function() {
  return gulp.src('./src/index_dist.html')
    .pipe(rename('./index.html'))
    .pipe(gulp.dest('dist'))
 ;
});



gulp.task('gulp_babel', function() {
  return gulp.src('./src/js/*')
    .pipe(gulp_babel({
        presets: ['env']
    }))
    .pipe(gulp_concat('all.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('concat_external', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/umd/popper.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/bootbox/bootbox.min.js'])
    .pipe(gulp_concat('external_all.js'))
    .pipe(gulp.dest('dist'))
});




gulp.task('default', [ 'gulp_copy_images', 'gulp_concat_css', 'concat_external' , 'gulp_babel', 'gulp_copy_json' , 'gulp_copy_index_dist']);
