const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const rigger = require("gulp-rigger");
const cssmin = require("gulp-cssmin");
const jsmin = require("gulp-jsmin");
const sass = require('gulp-sass')(require('sass'));
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");
const { reload } = require("browser-sync");
const path = require("path");
const newer = require("gulp-newer");
const del = require("del");

const filesPath = {
    src: {
        html: "src/*.html",
        css: "src/sass/style.scss",
        js: "src/js/main.js",
        img: "src/img/**/*.*",
        fonts: "src/fonts/**/*.*",
        libs: "src/libs/**/*.*",
        favicon: "src/favicon.ico",
        api: "src/api/**/*.*",
        readme: "README.md"
    },
    build: {
        html: "build/",
        css: "build/css",
        js: "build/js/",
        img: "build/img/",
        fonts: "build/fonts",
        libs: "build/libs/",
        favicon: "build/",
        api: "build/api/",
        readme: "build/"
    },
    watch: {
        html: "src/**/*.html",
        css: "src/sass/**/*.scss",
        js: "src/js/**/*.js",
        img: "src/img/**/*.*",
        fonts: "src/fonts/**/*.*",
        libs: "src/libs/**/*.*",
        favicon: "src/favicon.ico",
        api: "src/api/**/*.*",
        readme: "README.md"
    },
    clean: {
        all: "build/**/*",
        html: "build/*.html",
        img: "build/img/**/*.*",
        fonts: "build/fonts/**/*.*",
        libs: "build/libs/**/*.*"
    }
}

function buildHTML() {
    del.sync(filesPath.clean.html);
    return gulp.src(filesPath.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(filesPath.build.html))
        .pipe(reload({
            stream: true
        }));
}

function buildCSS() {
    return gulp.src(filesPath.src.css)
        .pipe(rigger())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(filesPath.build.css))
        .pipe(reload({
            stream: true
        }));
}

function buildJS() {
    return gulp.src(filesPath.src.js)
        .pipe(rigger())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(jsmin())
        .pipe(gulp.dest(filesPath.build.js))
        .pipe(reload({
            stream: true
        }));
}

function buildFonts() {
    del.sync(filesPath.clean.fonts);
    return gulp.src(filesPath.src.fonts)
        .pipe(gulp.dest(filesPath.build.fonts))
        .pipe(reload({
            stream: true
        }));
}

function buildImg() {
    return gulp.src(filesPath.src.img)
        .pipe(newer(filesPath.build.img))
        .pipe(imagemin())
        .pipe(gulp.dest(filesPath.build.img))
        .pipe(reload({
            stream: true
        }));
}

function buildLibs() {
    del.sync(filesPath.clean.libs);
    return gulp.src(filesPath.src.libs)
        .pipe(gulp.dest(filesPath.build.libs))
        .pipe(reload({
            stream: true
        }));
}

function buildFavicon() {
    return gulp.src(filesPath.src.favicon)
        .pipe(gulp.dest(filesPath.build.favicon))
        .pipe(reload({
            stream: true
        }));
}

function buildAPI() {
    return gulp.src(filesPath.src.api)
        .pipe(gulp.dest(filesPath.build.api));
}

function buildReadme() {
    return gulp.src(filesPath.src.readme)
        .pipe(gulp.dest(filesPath.build.readme));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch(filesPath.watch.html, buildHTML);
    gulp.watch(filesPath.watch.css, buildCSS);
    gulp.watch(filesPath.watch.js, buildJS);
    gulp.watch(filesPath.watch.fonts, buildFonts);
    gulp.watch(filesPath.watch.libs, buildLibs);
    gulp.watch(filesPath.watch.favicon, buildFavicon);
    gulp.watch(filesPath.watch.api, buildAPI);
    gulp.watch(filesPath.src.readme, buildReadme);

    let imgWatcher = gulp.watch(filesPath.watch.img, buildImg);
    imgWatcher.on('unlink', function (filepath) {
        del.sync(["dist\\" + path.relative(path.resolve('src'), filepath)]);
    });
}

function cleanDist(cb) {
	del.sync([filesPath.clean.all], { force: true });
    cb();
}

exports.start = gulp.series(gulp.parallel(buildHTML, buildCSS, buildJS, buildFonts, buildImg, buildLibs, buildFavicon, buildAPI, buildReadme), watch);
exports.build = gulp.series(cleanDist, gulp.parallel(buildHTML, buildCSS, buildJS, buildFonts, buildImg, buildLibs, buildFavicon, buildAPI, buildReadme));