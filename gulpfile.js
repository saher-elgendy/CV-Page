const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

let autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];

gulp.task('prefix', function () {
    return gulp.src('src/app.css')
    .pipe(autoprefixer({ browsers: autoprefixBrowsers }))
    .pipe(gulp.dest('styles'));
});