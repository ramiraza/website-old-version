// initiating requires
var gulp        = require('gulp');
var child       = require('child_process');
var gutil       = require('gulp-util')
var browserSync = require('browser-sync').create();


// gulp.task('build', shell.task(['jekyll serve -w']));

// task for auto refresh with browser-sync
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    notify: false,
    reloadDebounce: 500
  });
  gulp.watch('_site/**/*.*')
      .on('change', browserSync.reload)
});

// task for running jekyll shell commands

gulp.task('build', ['serve'],() => {
  const jekyll = child.spawn('jekyll', ['serve', '--watch']);

  const jekyllLogger = (buffer) => {
    buffer.toString()
          .split(/\n/)
          .forEach((message) => gutil.log('Jekyll: ' + message))
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});



gulp.task('default', ['build']);
