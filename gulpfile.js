const project_folder = 'dist';
const source_folder = '#src';
const gulp = require('gulp');
const { src, dest } = require('gulp');
const del = require('del');
var sass = require('gulp-sass')(require('sass'));
// const pug = require('gulp-pug');
 



const path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        icon: project_folder +'/img/icon/',
        fonts: project_folder + '/fonts/',
        download: project_folder + '/download/'
    },
    src: {
        html: source_folder + '/{,en/}*.html',
        pug: source_folder + '/*.pug',
        css: source_folder + '/css/*.css',
        scss: source_folder + '/scss/*.scss',
        js: source_folder + '/js/*.js',
        img: source_folder + '/img/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        icon:source_folder + '/img/icon/*.svg',
        fonts: source_folder + '/fonts/*.ttf',
        download: source_folder + '/download/*.pdf'
    },
    watch: {
        html: source_folder + '/*.html',
        css: source_folder + '/css/*.css',
        js: source_folder + '/js/*.js',
        img: source_folder + '/img/**/*.{jpg, png, svg, gif, ico, webp}',
    },
    clean: './' + project_folder + '/'
}
function download_file() {
    return src(path.src.download)
    .pipe(dest(path.build.download))
}
function html() {
    return src(path.src.html)
    .pipe(dest(path.build.html))
}
// function html_pug() {
//     return src(path.src.pug)
//     .pipe(pug())
//     .pipe(dest(path.build.html))
// }
function js() {
    return src(path.src.js)
    .pipe(dest(path.build.js))
}
function style() {
    return src(path.src.css)
    .pipe(dest(path.build.css))
}
function style_scss() {
    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');

    return src(path.src.scss)
    .pipe(sass.sync())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(path.build.css))
}
function image() {
    return src(path.src.img)
    .pipe(dest(path.build.img))
}
function image_icon() {
    return src(path.src.icon)
    .pipe(dest(path.build.icon))
}
function font() {
    return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}
function clean() {
    return del(path.clean)
}
function html_watch() {
    gulp.watch(path.src.html, html);
    gulp.watch(path.src.scss, style_scss);
    gulp.watch(path.src.js, js);
}

let build = gulp.series(clean,html,style,style_scss,font,image,image_icon,js,download_file);

exports.build = build;
exports.download_file = download_file;
exports.html = html;
// exports.html_pug = html_pug;
exports.font = font;
exports.js = js;
exports.style = style;
exports.image = image;
exports.image_icon = image_icon;
exports.style_scss = style_scss;
exports.html_watch = html_watch;