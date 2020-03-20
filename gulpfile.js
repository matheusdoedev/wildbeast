var gulp = require('gulp');
var gulpCleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var filesCSS = [
  "src/css/components.css",
  "src/css/elements.css",
  "src/css/generic.css",
  "src/css/objects.css",
  "src/css/settings.css",
  "src/css/tools.css"
]

gulp.task('concat', () => {
  return gulp.src(filesCSS)
})

// gulp.task('styles', () => {
//     return gulp.src(filesCSS)
//         .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//         .pipe(csso())
//         .pipe(gulp.dest('dist/css'))
// });

// gulp.task('pages', function() {
//     return gulp.src(['src/index.html'])
//       .pipe(htmlmin({
//         collapseWhitespace: true,
//         removeComments: true
//       }))
//       .pipe(gulp.dest('dist'));
//   });

