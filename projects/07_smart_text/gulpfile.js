const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')) // плагин для компиляции SCSS в CSS
const cleanCSS = require('gulp-clean-css') // плагин для минификации CSS
const uglify = require('gulp-uglify') // плагин для минификации JavaScript
const rename = require('gulp-rename') // плагин для переименования файлов (например, добавления суффикса .min)
const browserSync = require('browser-sync').create() // плагин для запуска локального сервера

// Пути к исходным файлам
const paths = {
    scss: 'src/styles/style.scss',
    js: 'src/scripts/**/*.js',
    cssDest: 'dist/css',
    jsDest: 'dist/js',
    baseDir: 'src/'
};

// ---------------------------------------------------------------------------------------
// gulp default

// Задача для минификации css
gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.cssDest))
})

// Задача для минификации js
gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.jsDest))
})

gulp.task('default', gulp.series('scss', 'js'))

// ---------------------------------------------------------------------------------------
// gulp developing

// задача для компиляции scss в css
gulp.task('css', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/styles'))
})

// Задача для запуска локального сервера
gulp.task('server', function () {
    // Инициализация локального сервера
    browserSync.init({
        server: {
            baseDir: paths.baseDir, // Укажите папку вашего проекта, например, './dist' для скомпилированных файлов
        },
        port: 3000, // Порт сервера (по умолчанию 3000)
    })

    // Наблюдение за изменениями в HTML/CSS/JS-файлах и их автоматическое обновление
    gulp.watch(paths.scss, gulp.series('css'));  // Следим за SCSS файлами

    gulp.watch('src/**/*.html').on('change', browserSync.reload)
    gulp.watch('src/**/*.css').on('change', browserSync.reload)
    gulp.watch('src/**/*.js').on('change', browserSync.reload)
})
