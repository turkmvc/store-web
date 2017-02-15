/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

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
