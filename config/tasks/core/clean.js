var del = require("del");

module.exports = function (gulp, dirname) {
    "use strict";

    return function () {
        del([
            dirname + "/dist*/**",
            dirname + "/build",
            dirname + "/coverage"
        ]);
    };
};
