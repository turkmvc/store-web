module.exports = function (gulp, dirname, options, plugins) {
    return function () {
        return gulp.src("./dist/**")
            .pipe(plugins.ngAnnotate({add: true, remove: true}))
            .pipe(gulp.dest("./dist/"));
    };
};
