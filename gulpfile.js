var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');

var filesCSS = [
  "src/css/settings.css",
  "src/css/generic.css",
  "src/css/tools.css",
  "src/css/elements.css",
  "src/css/objects.css",
  "src/css/components.css"
];

gulp.task('styles', () => {
  return gulp.src(filesCSS)
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('pages', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
})

