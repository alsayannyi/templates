//The require statements tell Node to look into the node_modules folder for named packages 
// and assign its contents to the same named variables
var gulp = require('gulp');
var sass = require('gulp-sass');  
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');  
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var deploy = require('gulp-gh-pages');
var terser = require('gulp-terser');

// Creating Tasks 
// simple syntax and test
gulp.task('hey', function() {
    console.log('Congrats man !!');
});
//this task will spin up a server and do live-reloading 
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  }) 
// translating sass files into css on running $ gulp sass
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') // will generate a css file from any scss file within scss folder
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });
// concatenating (combine) and minifying js+css files on running $ gulp useref
// gulp.task('useref', function(){
// return gulp.src('app/*.html')
//     .pipe(useref())
//     // Minifies only if it's a JavaScript file
//     .pipe(gulpIf('*.js', uglify()))
//     // Minifies only if it's a CSS file
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'));
// });
// using terser to es6-minify
gulp.task('useref', function(){
  return gulp.src('app/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', terser()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'));
  });
// Optimizing images & caching them on running $ gulp images
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest('dist/images'))
  });
// copy `fonts` from `app` to `dist` on running $ gulp fonts
  gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  })
 
// the `dist` folder will be deleted on running gulp clean:dist
// We don't have to worry about deleting the dist/images folder because gulp-cache has already stored the caches of the images on your local system
gulp.task('clean:dist', function() {
    return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
}) 
//BUILD SEQUENCES
// This directive groups development processes into one set:
// compiled Sass to CSS, watched for changes, and reloaded the browser accordingly.
gulp.task('watch',['browserSync', 'sass'], function(){
   //  Watching * files for changes: browserSync will be completed before watch is allowed to run (using it as second argument)
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});
// This directive groups tasks that are need to create the production website - clean:dist, sass, useref, images and fonts
gulp.task('build', function (callback) {
    runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'],
      callback
    )
})
// when you have a task named default, you can run it simply by  $ gulp
gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'], 
      callback
    )
})

//Push build to gh-pages
gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});