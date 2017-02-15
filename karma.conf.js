/*
 * Copyright 2003-2015 Monitise Group Limited. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Monitise Group Limited.
 * Any reproduction of this material must contain this notice.
 *
 */

var sourcePath = require("./config/paths/source-path");
var libPath = require("./config/paths/lib-path");
var specPath = require("./config/paths/spec-path");
var testLibPath = require("./config/paths/test-lib-path");
var mockDataPath = require("./config/paths/mock-path");

var allFilesPath = libPath.concat(testLibPath.concat(sourcePath).concat(mockDataPath.concat(specPath)));

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: "",

        // frameworks to use
        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: allFilesPath,

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ["progress", "coverage"],

        preprocessors: {
            "src/js/**/**": "coverage"
        },

        coverageReporter: {
            type: "text",
            dir: "coverage/"
        },
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUGç
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        // - If you install Windows VMs using ievms, use below:
        //   IE6 - WinXP
        //   IE7 - WinXP
        //   IE8 - WinXP
        //   IE9 - Win7
        //   IE10 - Win7
        //   IE11 - Win7
        browsers: ["PhantomJS"],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};