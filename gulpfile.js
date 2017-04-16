'use strict';

const gulp            = require('gulp');
const pug             = require('gulp-pug');
const webpack         = require('webpack');
const gulpWebpack     = require('gulp-webpack');
const ts              = require('gulp-typescript');
const browserSync     = require('browser-sync').create();

/* Variables */
const webpackConfig = require('./webpack.config.js');
const source = 'src';
const distribution = 'dist';

/* Tasks */
gulp.task('pug', function() {
    return gulp.src(source +'/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest(distribution));
});
gulp.task('webpack', function() {
    return gulp.src(source +'/main.ts')
        .pipe(gulpWebpack( webpackConfig, webpack))
        .pipe(gulp.dest( distribution + '/js'));
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: distribution
        }
    });
});
gulp.task('default', ['pug', 'webpack',  'browser-sync']);

/* Watchers*/
gulp.watch(source +'/**/*.pug', ['pug'] );
gulp.watch(source +'/**/*.ts', ['webpack'] );
gulp.watch([ distribution + '/**/*.html', distribution + '/js/*.js']).on('change', browserSync.reload);