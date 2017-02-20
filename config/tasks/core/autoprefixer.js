module.exports = function (gulp, dirname, options, plugins) {
    "use strict";
    return function () {
        gulp.src(dirname + "/dist/store-" + options.baboonVersion + ".css")
            .pipe(plugins.autoprefixer({
                cascade: false
            }))
            .pipe(gulp.dest(dirname + "/dist"));
    };
};
