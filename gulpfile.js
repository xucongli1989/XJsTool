var gulp = require('gulp');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var fs = require('fs');
var jsdoc = require('gulp-jsdoc');
var jshint = require('gulp-jshint');

var headerData = {
	now: (function (dt) {
		return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
	})(new Date())
};

/**
 * 代码检查
 */
gulp.task('checkCode', function () {
	gulp.src('./modules/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('gulp-jshint-html-reporter', {
			filename: './build/jshint-output.html',
			createMissingFolders: false
		}));
});

/**
 * 打包压缩
 */
gulp.task('default', ['checkCode'], function () {
	//文件头说明
	var txt = fs.readFileSync('./modules/copyright.txt', 'utf8');
	//开始处理
	gulp.src('./modules/*.js')
		.pipe(jsdoc('./doc/'))
		.pipe(webpack({
			entry: {
				index: './modules/main.js'
			},
			resolve: {
				root: './modules/'
			}
		})).pipe(concat('XJsTool.js'))
		.pipe(header(txt, headerData))
		.pipe(gulp.dest('build/'))
		.pipe(concat('XJsTool.min.js'))
		.pipe(uglify())
		.pipe(header(txt, headerData))
		.pipe(gulp.dest('build/'));
});
