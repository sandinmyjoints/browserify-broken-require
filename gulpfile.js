'use strict';

var gulp = require('gulp');
var Promise = require('bluebird');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = Promise.promisify(require("glob"));

gulp.task('bundle', function (cb) {

  var bundle = browserify({
    basedir: './src/client',
    entries: ['./desktop.js'],
    debug: false
  });

  bundle.require('./common/boop');

  bundle
    .bundle()
    .pipe(source('desktop.bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/'))
    .on('end', cb);
});
