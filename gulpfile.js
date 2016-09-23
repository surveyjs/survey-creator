/// <binding ProjectOpened='copylibs' />
/*global require*/
var gulp = require('gulp'),
    concat = require("gulp-concat-util"),
    insert = require('gulp-insert'),
    ts = require('gulp-typescript'),
    gnf = require('gulp-npm-files'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    qunit = require("gulp-qunit"),
    serve = require("gulp-serve"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sequence = require("gulp-sequence"),
    html2ts = require("gulp-html-to-ts"),
    jsonTransform = require('gulp-json-transform'),
    project = require("./project.json");

var Server = require("karma").Server;
var editorVersion = "0.9.12";

var paths = {
    mainJSfile: "surveyeditor.js",
    webroot: "./wwwroot/",
    dist: "./dist/",
    ts: ["./src/*.ts", "./src/propertyEditors/*.ts"],
    typings: "./typings/**/*.d.ts",
    package: "./package",
    packageDist: "./package/dist",
    tsTests: "./tests/*.ts",
    tsTests_ko: "./tests/ko/*.ts",
    styles: "./src/*.scss",
    templates_ko: "./src/templates/**/*.html",
    template_page: "./src/templates.survey/template_page.html",
    template_question: "./src/templates.survey/template_question.html"
};

paths.jsFolder = paths.webroot + "js/";
paths.testsFolder = paths.webroot + "tests/";
paths.js = paths.jsFolder + "**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

var copyright = ["/*!",
 "* surveyjs Editor v" + editorVersion,
 "* (c) Andrew Telnov - http://surveyjs.org/builder/",
 "* Github - https://github.com/andrewtelnov/survey.js.editor",
 "*/", "", ""].join("\n");


gulp.task('copyfiles', function (callback) {
    gulp.src(gnf(null, 'package.json'), { base: './' })
        .pipe(rename(function (path) {
            path.dirname = "";
            path.basename = path.basename.replace("-latest", "");
        }))
        .pipe(gulp.dest(paths.jsFolder));
});

gulp.task('createPackage', function (callback) {
    return gulp.src("packagetemplate.json")
        .pipe(jsonTransform(function (data) {
            data.version = editorVersion;
            data.main = paths.mainJSfile.replace(".js", ".min.js");
            data.dependencies["survey-knockout-bootstrap"] = editorVersion;
            return data;
        }, "  "))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(paths.package));
});

gulp.task('updatesurveyjsversion', function (callback) {
    return gulp.src("package.json")
        .pipe(jsonTransform(function (data) {
            data.dependencies["survey-knockout-bootstrap"] = "^" + editorVersion;
            return data;
        }, "  "))
        .pipe(gulp.dest(""));
});

(function () {
    (function () {
        "use strict";
        gulp.task("typescript:sources", function () {
            var tsResult = gulp.src([
                  paths.webroot + "/lib/survey/**/*.d.ts",
                  paths.typings
            ].concat(paths.ts))
               .pipe(insert.prepend(copyright))
               .pipe(sourcemaps.init())
               .pipe(ts({
                   target: "ES5",
                   noImplicitAny: false,
                   declarationFiles: true
                }));

            return tsResult.js
                .pipe(concat(paths.mainJSfile))
                .pipe(sourcemaps.write({ sourceRoot: "src" }))
                //Source map is a part of generated file
                .pipe(gulp.dest(paths.dist))
                .pipe(gulp.dest(paths.jsFolder))
                .pipe(gulp.dest(paths.packageDist));
        });

        gulp.task("typescript:tests", function () {
            var tsResult = gulp.src([
                  paths.webroot + "/lib/survey/**/*.d.ts",
                  paths.typings,
                  //"./src/model/*.ts",
                  paths.tsTests])
               .pipe(sourcemaps.init())
               .pipe(ts({
                   target: "ES5",
                   noImplicitAny: false
               }));

            return tsResult.js
                .pipe(concat('surveyeditor.tests.js'))
                .pipe(sourcemaps.write({ sourceRoot: "tests" }))
                //Source map is a part of generated file
                .pipe(gulp.dest(paths.testsFolder));
        });

        gulp.task('test:copy-index-html', function () {
            return gulp.src('./tests/index.html')
            // Perform minification tasks, etc here
            .pipe(gulp.dest(paths.testsFolder));
        });

        gulp.task("typescript", ["typescript:sources", "typescript:tests", "test:copy-index-html"]);
    })("TypeScript compilation");

    gulp.task('compress', function () {
        "use strict";
        return gulp.src(paths.dist + paths.mainJSfile)
            .pipe(uglify())
             .pipe(rename({
                 extname: '.min.js'
             }))
            .pipe(concat.header(copyright))
            .pipe(gulp.dest(paths.dist))
            .pipe(gulp.dest(paths.packageDist));
    });

    gulp.task('sass', function () {
        "use strict";    
        return gulp.src(paths.styles)
          .pipe(sass.sync().on('error', sass.logError))
          .pipe(concat("surveyeditor.css"))
          .pipe(gulp.dest(paths.webroot + 'css'))
          .pipe(gulp.dest(paths.dist + 'css'))
          .pipe(gulp.dest(paths.packageDist));
    });

    gulp.task('templates', function () {
        "use strict";    
        gulp.src(paths.template_page)
          .pipe(html2ts())
          .pipe(gulp.dest("./src/"));
        gulp.src(paths.template_question)
          .pipe(html2ts())
          .pipe(gulp.dest("./src/"));
        return gulp.src(paths.templates_ko)
          .pipe(concat("templateEditor.ko.html"))
          .pipe(html2ts())
          .pipe(gulp.dest("./src/"));
    });

    gulp.task("makedist", sequence("templates", ["typescript", "sass"], "compress", "createPackage", "updatesurveyjsversion"));
})("TypeScript compilation");

gulp.task("test_ci", function (done) { 
    new Server({ 
        configFile: __dirname + "/karma.conf.js", 
        singleRun: true 
    }, done).start(); 
}); 
 
gulp.task("server", serve({ 
     root: ["wwwroot"], 
     port: 30001 
})); 
