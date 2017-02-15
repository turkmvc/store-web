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
        return gulp.src("./dist/**")
            .pipe(plugins.ngAnnotate({add: true, remove: true}))
            .pipe(gulp.dest("./dist/"));
    };
};
