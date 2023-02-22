module.exports = function () {
    $.gulp.task('sass', async function () {
        return $.gulp.src('src/static/css/main.sass', { sourcemaps: true})
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.sass({ outputStyle: 'expanded' }))
            .pipe($.gp.autoprefixer({
                Browserslist: ["defaults and supports es6-module",
                "maintained node versions"]
            }))
            .pipe($.sass({ outputStyle: 'compressed' }))
            .pipe($.gulp.dest('build/css/'))
            .on('end', $.bs.reload)
    });
}
