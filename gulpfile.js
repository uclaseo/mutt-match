const gulp = require('gulp'),
      eslint = require('gulp-eslint'),
      gls = require('gulp-live-server'),
      nodemon = require('gulp-nodemon')
      watch = require('gulp-watch');

const paths = {
  server: './server/index.js',
  public: './public/**/*.js'
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
  return nodemon({
    script: paths.server, 
    watch: [paths.server],
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('watch', () => {
  return watch(paths.public, { ignoreInitial: false });
});

//default
gulp.task('default', ['lint', 'start', 'watch']);