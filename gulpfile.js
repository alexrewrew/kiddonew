/* команди npm для gulp
 npm install gulp-sass --save-dev
 npm install browser-sync --save-dev
 npm install --save-dev gulp-watch
 npm install gulp-useref --save-dev
 npm install gulp-uglify --save-dev -//
 npm install gulp-if --save-dev
 npm install gulp-minify-css --save-dev -//
 npm install gulp-clean-css --save-dev -//
 */

var gulp = require('gulp'), //ініціалізація gulp
    sass = require('gulp-sass'), //ініціалізація sass
    browserSync = require('browser-sync'), //ініціалізація browser-sync
    concat = require('gulp-concat'),//конкатенація css та js
    uglify = require('gulp-uglify'), //мініфікація js
    cssnano = require('gulp-cssnano'), //мініфікація css
    rename = require('gulp-rename'), //зміна імені файла
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

// Завдання для компіляції sass
gulp.task('sass', function () {
    return gulp.src('app/scss/style.scss') //пошук файлів з розширенням scss
    // return gulp.src('app/scss/*.scss') //пошук файлів з розширенням scss
        .pipe(sass().on('error', sass.logError)) //вивід помилок
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/css')) //вивід зкомпільованого файлу до теки css
        .pipe(browserSync.reload({ // перезавантажувати синхронізатор при кожній зміні
            stream: true
        }))
});

//конкатинація та мініфікація js
gulp.task('scripts', function () {
    return gulp.src([
        'app/js/scripts.js',
        'app/js/contact-form.js',
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

//конкатинація та мініфікація css
/*gulp.task('css-libs', function () {
 return gulp.src([
 'app/css/fonts.css',
 'app/css/style.css',
 'app/css/style-responsive.css',
 ])
 .pipe(concat('style.min.css'))
 .pipe(cssnano())
 .pipe(gulp.dest('app/css'));
 });*/


//завдання для browser-sync
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app' //робоча папка для перезавантаження сторінки
        }
    })
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
})

//слідкування за змінами у проекті
gulp.task('watch', ['browserSync', 'sass', 'scripts'/*, 'css-libs'*/], function () { //запуск browser-sync та sass відслідковувачів
    gulp.watch('app/scss/**/*.scss', ['sass']); //пошук scss файлів
    gulp.watch('app/*.html', browserSync.reload); //пошук html файлів
    gulp.watch('app/js/**/*.js', browserSync.reload); //пошук js файлів
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'css-libs'], function () {
    var buildCss = gulp.src('app/css/style.min.css')
        .pipe(gulp.dest('dist/css'));
    var bulidFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));
    var bulidHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

