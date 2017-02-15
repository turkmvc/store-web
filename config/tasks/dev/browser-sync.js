/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

var browserSync = require("browser-sync");
var proxy = require("proxy-middleware");
var url = require("url");
var endpointConfig = require("../../../config/app/dev.json");

module.exports = function (gulp, dirname) {
    "use strict";

    return function () {
        var endPointUrl = endpointConfig.externalResourceDomain + endpointConfig.middlewarePrefix;
        endPointUrl.slice(0, endPointUrl.length - 1);

        var proxyOptions = url.parse(endPointUrl);
        proxyOptions.route = "/store";

        browserSync.init([dirname + "/dist/*.css", dirname + "/dist/index.html"], {
            server: {
                baseDir: dirname + "/dist",
                index: "/index.html",
                middleware: proxy(proxyOptions)
            },
            logConnections: true,
            ghostMode: false,
            open: false
        });
    };
};
