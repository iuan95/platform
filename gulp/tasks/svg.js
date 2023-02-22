module.exports = function () {

    $.gulp.task('svg', function () {
        return $.gulp.src('src/static/img/svg/*.svg') 
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg",
                    }
                }
            }))
            .pipe($.gulp.dest('build/img/svg/'));
    });
}