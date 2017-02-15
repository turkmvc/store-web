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
    "use strict";

    return function () {
        return gulp.src(options.appPath)
            .pipe(plugins.concat("store-" + options.baboonVersion + ".js"))
            .pipe(plugins.if(options.shouldMinify, plugins.uglify()))
            .pipe(gulp.dest(dirname + "/dist"));
    };
};
