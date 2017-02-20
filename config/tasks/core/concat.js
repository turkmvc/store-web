module.exports = function (gulp, dirname, options, plugins) {
    "use strict";

    return function () {
        return gulp.src(options.appPath)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat("store-" + options.baboonVersion + ".js"))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(dirname + "/dist"));
    };
};
