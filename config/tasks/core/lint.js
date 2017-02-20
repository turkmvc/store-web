module.exports = function (gulp, dirname, options, plugins) {
    "use strict";
    return function () {
        return gulp.src([
                dirname + "/src/**/*.js",
                "!" + dirname + "/src/app/config/i18n/languages/**"
            ])
            .pipe(plugins.eslint())
            .pipe(plugins.eslint.format())
            .pipe(plugins.eslint.failAfterError());
    };
};
