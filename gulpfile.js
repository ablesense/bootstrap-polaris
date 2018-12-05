var settings = require("./package.json").settings;
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");

var autoprefixerOptions = {
  browsers: ["last 2 versions", "> 1%"],
  cascade: false
};

gulp.task("compilesass", function() {
  return gulp
    .src(settings.sass_source)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(concat(settings.css_name))
    .pipe(gulp.dest('./demo'))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(settings.css_dest));
});

gulp.task("default", ["compilesass"], function() {
  gulp.watch([settings.sass_watch_loc], ["compilesass"]);
});
