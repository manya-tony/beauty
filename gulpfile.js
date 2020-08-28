const {src, dest, watch, series, parallel} = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const minifyCSS = require('gulp-minify-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const process = require('gulp-process');

const paths = {
    'src' : 'src',
    'srcCSS' : 'src/css',
    'srcSCSS' : 'src/scss',
    'srcJS' : 'src/js',

    'dist' : 'dist',
    'distCSS' : 'dist/css',
    'distJS' : 'dist/js'
}

// css圧縮
function css() {
    return src(paths.srcCSS + '/**/*.css')
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(paths.distCSS));
}
// scssをcssへコンパイルして圧縮
function scss() {
    return src(paths.srcSCSS + '/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest(paths.srcCSS))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(paths.distCSS));
}
// js圧縮
function js() {
    return src(paths.srcJS + '/**/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(paths.distJS));
}
// 画像圧縮
function imgComp() {
    var srcGlob = paths.src + '/**/*.+(jpg|jpeg|png|gif)';
    var dstGlob = paths.dist;
    return src(srcGlob)
        .pipe(changed(dstGlob))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            mozjpeg({quality:50}),
            pngquant()
        ]))
        .pipe(dest(dstGlob));
}

// ファイル監視
function scssWatch() {
    return watch(paths.srcSCSS + '/**/*.scss', scss);
}
function jsWatch() {
    return watch(paths.srcJS + '/**/*.js', js);
}
function imgWatch() {
    return watch(paths.src + '/**/*', imgComp);
}

// タスク終了
function kill(){
    return process.exit(0);
}

// 圧縮関数
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.imgComp = imgComp;

// ファイル監視関数
exports.scssWatch = scssWatch;
exports.jsWatch = jsWatch;
exports.imgWatch = imgWatch;

// タスク終了関数
exports.kill = kill;

// デフォルト関数
exports.default = parallel(scssWatch, jsWatch);