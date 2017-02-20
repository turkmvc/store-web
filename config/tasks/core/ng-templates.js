module.exports = function (gulp, dirname, options, plugins) {
    return function () {
        return gulp.src(dirname + "/src/**/*.html")
            .pipe(plugins.minifyHtml({empty: true, quotes: true}))
            .pipe(plugins.ngTemplates({
                "module": "store.templates",
                "standalone": true,
                "path": function (path, base) {
                    return path.replace(base, '/');
                },
                "filename": "templates.js"
            }))
            .pipe(gulp.dest("./build/src/app"));
    };
};
