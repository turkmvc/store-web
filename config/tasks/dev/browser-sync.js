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
        proxyOptions.route = "/Store";

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
