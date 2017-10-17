// Display message in console to users to set up config
console.warn(
  "****************************\n" +
    "Make sure to set up your config.yml file for your project type and other options or gulp will not work properly!\n" +
    "****************************"
);
// Settings
var settings = require("./package.json").settings;

// Gulp plugin setup
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");

// This task compiles the less file by auto prefixing, cleaning the css, and
// concating it
var autoprefixerOptions = {
  browsers: ["last 5 versions", "> 0.5%", "IE 9", "Firefox ESR"],
  cascade: false
};

gulp.task("compilesass", function() {
  return gulp
    .src(settings.sass_source)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat(settings.css_name))
    .pipe(gulp.dest(settings.css_dest))
    .pipe(gulp.dest('./demo'));
});

// Default gulp action when gulp is run
// Browser sync handles auto refresh when modifying css, js, html, pictures, and more!
gulp.task("default", function() {
  // We want to watch the sass
  gulp.watch([settings.sass_watch_loc], ["compilesass"]);
});
