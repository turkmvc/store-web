/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

var proxy = require("proxy-middleware");
var url = require("url");
var endpointConfig = require("../../../config/app/dev.json");

module.exports = function (gulp, dirname, options, plugins) {
    "use strict";

    return function () {
        var endPointUrl = endpointConfig.externalResourceDomain + endpointConfig.middlewarePrefix;
        endPointUrl.slice(0, endPointUrl.length - 1);

        var proxyOptions = url.parse(endPointUrl);
        proxyOptions.route = "/store";

        gulp.src(dirname + "/dist")
            .pipe(plugins.webserver({
                livereload: false,
                host: "0.0.0.0",
                directoryListing: false,
                open: false,
                middleware: [proxy(proxyOptions)]
            }));
    };
};