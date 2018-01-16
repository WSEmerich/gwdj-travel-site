var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function () {
  console.log("Hooray - you're first Gulp task!");
});

gulp.task('html', function () {
  console.log("Imagine something useful to HTML here.");
});

gulp.task('styles', function () {
  console.log("Imagine something useful to CSS here.");
});

gulp.task('watch', function () {

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

});
