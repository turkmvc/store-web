module.exports = function (gulp, dirname, options, plugins) {
    "use strict";

    return function () {
        return gulp.src(options.appCssPath)
            .pipe(plugins.concat("store-" + options.baboonVersion + ".css"))
            .pipe(gulp.dest(dirname + "/dist"));
    };
};
