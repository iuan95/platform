module.exports = function () {
    $.gulp.task('svgStore', function (){
        var myGol = $.gulp
            .src('src/static/img/grad/*.svg')
            .pipe($.svgStore({ inlineSvg: true }));

        function fileContents (filePath, file) {
            return file.contents.toString();
        }

        return $.gulp
            .src('build/img/svgStore/inline-svg.html')
            .pipe($.inject(myGol, { transform: fileContents }))
            .pipe($.gulp.dest('build/img/svgStore/'));
    });

}




