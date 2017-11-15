const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('browser-sync',() => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})

gulp.task('dev',['browser-sync'], () => {
  gulp.watch('*.html', browserSync.reload)
  gulp.watch('js/**/*.js', browserSync.reload)
  gulp.watch('css/**/*.css', browserSync.reload)
})