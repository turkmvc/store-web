var gulp = require("gulp");
var _ = require("lodash");
var requireDir = require("require-dir");
var plugins = require("gulp-load-plugins")();
var argv = require("yargs").argv;
var runSequence = require("run-sequence");

var sourcePath = require("./config/paths/source-path");
var libPath = require("./config/paths/lib-path");
var appPath = libPath.concat(sourcePath);

var devTasks;
var coreTasks = requireDir("./config/tasks/core");
var allTasks;

var packageJson = require("./package.json");
var pkgVersion = packageJson.version;
var versionNumbers = [pkgVersion];

var libCssPath = require("./config/paths/lib-css-path");
var appCssPath = libCssPath.concat("build/store.css");

var options = {
    distType: argv.dist || "dev",
    envType: argv.env || "dev",
    shouldMinify: false,
    baboonVersion: versionNumbers.join("."),
    appPath: appPath,
    appCssPath: appCssPath
};

allTasks = coreTasks;

if (options.envType === "dev") {
    devTasks = requireDir("./config/tasks/dev");
    _.assign(allTasks, devTasks);
}

if (options.distType !== "dev") {
    options.shouldMinify = true;
}

//Adding external tasks
_.forIn(allTasks, function (item, key) {
    gulp.task(key, item(gulp, __dirname, options, plugins))
});

gulp.task("watch", function () {
    gulp.watch("./src/**/*.js", ["concat"]);
    gulp.watch("./src/**/*.less", ["compile-styles"]);
    gulp.watch("./src/**/*.html", ["build-scripts"]);
});

gulp.task("compile-styles", function (callback) {
    runSequence("less","concat-css",
        "autoprefixer",
        callback);
});

gulp.task("build-source", function (callback) {
    runSequence("ng-annotate",
        "concat",
        callback);
});

gulp.task("build-scripts", function (callback) {
    runSequence(
        "ng-templates",
        "ng-constant",
        "concat",
        callback);
});

/*
 * Usage: gulp test
 * This task is for REVIEW job and general analyzing / testing purpose.
 */
gulp.task("test", function (callback) {
    runSequence("lint",
        "less",
        "run-specs",
        callback);
});

/*
 * Usage: gulp dev-live
 * This task creates a development build in "dist" folder and serves it in a browser-sync server.
 * For server configuration see: /config/tasks/dev/browser-sync.
 */
gulp.task("dev-live", function (callback) {
    runSequence(
        "lint",
        "copy-index",
        "copy-asset",
        "compile-styles",
        "build-scripts",
        "browser-sync",
        "watch",
        callback
    );
});

/*
 * Usage: gulp dev
 * This task creates a development build in "dist" folder and serves it in a static file server.
 * For server configuration see: /config/tasks/dev/web-server
 */
gulp.task("dev", function (callback) {
    runSequence(
        "lint",
        "copy-index",
        "copy-asset",
        "compile-styles",
        "build-scripts",
        "web-server",
        "watch",
        callback
    );
});

/*
 * Usage: gulp build --dist="distType"
 * This task creates a folder named "dist" and moves compiled ".less" files and concatenated ".js"
 * files to this folder.
 * "distType" can be "dev", "test", "uat" and "prod". "dev" is default value.
 * */
gulp.task("build", function (callback) {
    runSequence(
        "clean",
        "lint",
        "copy-index",
        "copy-asset",
        "compile-styles",
        "ng-templates",
        "ng-constant",
        "concat-dist",
        callback);
});
