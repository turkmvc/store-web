module.exports = function (gulp, dirname, options, plugins) {
    "use strict";

    return function () {
        return gulp.src(options.appPath)
            .pipe(plugins.concat("store-" + options.baboonVersion + ".js"))
            .pipe(plugins.if(options.shouldMinify, plugins.uglify()))
            .pipe(gulp.dest(dirname + "/dist"));
    };
};
