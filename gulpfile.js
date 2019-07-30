const {
    src,
    dest,
    parallel
} = require('gulp');

const minifyHTML = require('gulp-minify-html');
const uglifyJS = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const image = require('gulp-image');
const gulpSeo = require('gulp-seo');
const robots = require('gulp-robots');
const sitemap = require('gulp-sitemap');
const rename = require('gulp-rename');
const del = require('delete');

/**
 * minify
 * conctatinat
 * cache
 * test lint and optimze
 */

function defaultTask(cb) {

    return src('src/index.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'https://alphaolomi.com'
        }))
        .pipe(dest('dist/'));

}

exports.default = defaultTask

function html(cb) {

    return src('src/*.html')
        // src('views/index.html')
        .pipe(gulpSeo({
            list: ['og', 'se', 'schema', 'twitter'],
            meta: {
                title: 'Alpha Olomi // Software Developer',
                description: 'Alpha Olomi is a Software Developer with over 3 years of experiences in a wide range of disciplines. Constantly in back-end development, learning and experiencing new things.',
                author: 'Alpha olomi',
                keywords: ['Alpha Olomi', 'Alpha Elifuraha Olomi', 'personal', 'portfolio', 'experience', 'freelance', 'student', 'engineer', 'software', 'developer'],
                robots: {
                    index: true, // true
                    follow: true // true
                },
                revisitAfter: '5 month', // 5 month
                contact: 'hello@alphaolomi.com',
                image: 'http://alphaolomi.com/img/thumbnail.png',
                site_name: 'Alpha Olomi // Software Developer',
                type: 'profile'

            }
        }))
        .pipe(minifyHTML())
        .pipe(dest('dist'))
}

function javascript(cb) {

    return src('src/js/*.js')

        // The gulp-uglify plugin won't update the filename
        .pipe(uglifyJS())
        // So use gulp-rename to change the extension
        .pipe(rename({
            extname: '.min.js',
            basename: 'index',
        }))
        .pipe(dest('dist/js'));
}

function css(cb) {

    return src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(concatCss("main.min.css"))
        .pipe(dest('dist/css/'))


}

function imageMin(cb) {
    return src('src/img/*.+(png|jpg|gif)')
        .pipe(image())
        .pipe(dest('dist/img'));
}

function favicon(cb) {
    return src('src/favicon/*')
        // .pipe(image())
        .pipe(dest('dist/favicon'));
}

function font(cb) {

    return src('src/fonts/*.{eot,ttf,woff}')

        .pipe(dest('dist/fonts'));

}

function robot(cb) {
    return src('src/index.html')
        .pipe(robots({
            useragent: '*',
            allow: ['/'],
            disallow: ['cgi-bin/']
        }))
        .pipe(dest('dist/'));
}


function site_map(cb) {
    return src('src/index.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'https://alphaolomi.com'
        }))
        .pipe(dest('dist/'));
}

exports.build = parallel(html, javascript, css, imageMin, font, favicon, robot, site_map);

function clean(cb) {
    // Use the `delete` module directly, instead of using gulp-rimraf
    del(['dist'], cb);
}


exports.clean = clean;