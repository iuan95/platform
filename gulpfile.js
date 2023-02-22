'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-pug
gulp-sass
gulp-csso
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat

*/


global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),
    svgSprite: require( 'gulp-svg-sprite'),
    svgStore: require('gulp-svgstore'),
    inject:require('gulp-inject' ),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
    $.gulp.parallel('pug','scripts:lib','scripts','img','fonts', 'svg', 'sass', 'svg1', 'svgStore'),
    $.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('pug','scripts:lib','scripts','img','fonts', 'svg', 'sass', 'svg1', 'svgStore')
));
