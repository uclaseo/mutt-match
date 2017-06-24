const gulp = require('gulp'),
      eslint = require('gulp-eslint'),
      nodemon = require('gulp-nodemon'),
      exec = require('child_process').exec,
      watch = require('gulp-watch'),
      gutil = require('gulp-util'),
      glr = require('gulp-livereload'),
      notify = require('gulp-notify');

const paths = {
  entry: './server/index.js',
  public: './public/**/*.js',
  server: '/server/**/*.js',
  html: '/public/**/*.html'
};

gulp.task('lint', function() {
  return gulp.src(paths.public)
  .pipe(eslint({baseConfig: {extends: 'eslint:recommended'}}))
  .pipe(eslint.format())
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});

//nodemon task
gulp.task('start', () => {

  // glr.listen();

  return nodemon({
    script: paths.entry, 
    watch: [paths.server],
    env: { 'NODE_ENV': 'development' }
  })
  // .on('restart', () => {
	// 	// when the app has restarted, run livereload.
	// 	gulp.src(paths.server)
	// 		.pipe(glr.reload)
	// 		.pipe(notify('Reloading page, please wait...'));
	// })
});

gulp.task('watch', () => {
  glr.listen();
  gulp.watch(paths.public, glr.reload);
  gulp.watch(paths.html, glr.reload);
});

gulp.task('build', () => {
  return exec('./bin/build.sh', (error, stdout, stderr) => {
    gutil.log('completed build', stdout, gutil.colors.magenta('cleaned, built and seeded tables'));
  });
});

//default
gulp.task('default', ['lint', 'start', 'watch']);