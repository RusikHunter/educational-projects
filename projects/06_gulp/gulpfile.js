const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const SASS = require('gulp-sass')(require('sass'))

const compileSASS = () => {
    return gulp.src('src/styles/style.scss')
        .pipe(SASS().on('error', SASS.logError))
        .pipe(gulp.dest('src/styles'))
}

const minifyCSS = () => {
    return gulp.src('src/styles/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/styles'))
}

gulp.task('watch', function () {
    gulp.watch('src/styles/style.scss', gulp.series(compileSASS, minifyCSS))
})