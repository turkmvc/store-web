module.exports = function (gulp, dirname) {
    "use strict";

    return function () {
        return gulp.src(
            [
                dirname + "/asset/**"
            ])
            .pipe(gulp.dest(dirname + "/dist/"));
    };
};
