var path = require("path");

module.exports = function (gulp, dirname, options, plugins) {
    "use strict";

    return function () {
        return gulp.src(dirname + "/src/app/app.less")
            .pipe(plugins.less({
                compress: false,
                paths: [path.join(dirname, "less", "includes")]
            }))
            .pipe(plugins.rename("store.css"))
            .pipe(gulp.dest("./build"));
    };
};
