module.exports = function () {

    $.gulp.task('svg1', function () {
        return $.gulp.src('src/static/img/qwe/*.svg') //хантан ыларым
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite1.svg",
                    }
                }
            }))
            .pipe($.gulp.dest('build/img/svg/'));
    });
}