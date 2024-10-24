const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')) // плагин для компиляции SCSS в CSS
const cleanCSS = require('gulp-clean-css') // плагин для минификации CSS
const uglify = require('gulp-uglify') // плагин для минификации JavaScript
const rename = require('gulp-rename') // плагин для переименования файлов (например, добавления суффикса .min)

// Путь к исходным файлам
const paths = {
    scss: 'src/styles/style.scss',
    js: 'src/scripts/App.js',
    cssDest: 'dist/css',
    jsDest: 'dist/js'
};

// Задача для компиляции SCSS
gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.cssDest))
})

// Задача для минификации JS
gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.jsDest))
})

// temp

// временная задача для компиляции sass в css
gulp.task('temp-scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/styles'))
})

gulp.task('watch', function () {
    gulp.watch(paths.scss, gulp.series('temp-scss'));  // Следим за SCSS файлами
})

// default

gulp.task('default', gulp.series('scss', 'js'))
