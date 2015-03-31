var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxy = require('proxy-middleware');
var url = require('url');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  var options = url.parse('http://localhost:3000/');
  options.route = '/api';

  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: [proxy(options)]
    }
  }, done);
});
