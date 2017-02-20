module.exports = function (gulp, dirname, options, plugins) {
    "use strict";

    return function () {
        gulp.src([dirname + "/index.html"])
            .pipe(plugins.replace(/store.js/g, "store-" + options.baboonVersion + ".js"))
            .pipe(plugins.replace(/store.css/g, "store-" + options.baboonVersion + ".css"))
            .pipe(gulp.dest(dirname + "/dist"));
    };
};
