const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css'); 

gulp.task('css', function () {
    return gulp.src('css/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task("watch", function() {
  gulp.watch('css/**/*.css', gulp.parallel('css'));
});