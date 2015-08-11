import gulp from "gulp";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";

gulp.task("build", function() {
  browserify("src/app.jsx", { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function(err) { console.log("Error : " + err.message); })
    .pipe(source("app.js"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.jsx", ["build"]);
});

gulp.task("default", ["build", "watch"]);
