var Server = require("karma").Server;

module.exports = function (gulp, dirname) {
    "use strict";

    return function (done) {
        new Server({
            configFile: dirname + "/karma.conf.js",
            singleRun: true
        }, done).start();
    };
};
