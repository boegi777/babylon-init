var gulp = require('gulp'),
    connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
      port: 8888,
      root: ['www'],
      livereload: true,
      open: {
          file: 'index.html',
          browser: 'chrome'
      }
}));

gulp.task('js', function () {
  gulp.src('./www/js/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./www/js/*.js'], ['js']);
});

gulp.task('serve', ['connect', 'watch']);
