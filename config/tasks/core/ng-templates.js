/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

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
