const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css'); 
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('css', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(concatCss("bundle.css"))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/'));
});
 
gulp.task("watch", function() {
  gulp.watch('sass/**/*.scss', gulp.parallel('css'));
});