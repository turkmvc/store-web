module.exports = function (gulp, dirname, options, plugins) {
    "use strict";
    return function () {
        return gulp.src(dirname + "/config/app/" + options.distType + ".json")
            .pipe(plugins.ngConstant({
                name: "store.config"
            }))
            .pipe(gulp.dest(dirname + "/build/src/app/config/external/"));
    };
};
