const gulp = require('gulp'),
      eslint = require('gulp-eslint'),
      nodemon = require('gulp-nodemon'),
      exec = require('child_process').exec,
      watch = require('gulp-watch'),
      gutil = require('gulp-util');

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

gulp.task('build', () => {
  return exec('./bin/build.sh', (error, stdout, stderr) => {
    gutil.log('completed build', stdout, gutil.colors.magenta('cleaned, built and seeded tables'));
  });
});

//default
gulp.task('default', ['lint', 'start', 'watch']);