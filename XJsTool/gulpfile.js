var gulp=require('gulp');
var concat=require('gulp-concat');
var amdOptimize=require('amd-optimize');
var req=require('requirejs');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var header=require('gulp-header');
var fs = require('fs');

gulp.task('default',function(){
	
	gulp.src('./modules/*.js').pipe(webpack({
		
		entry:{
			
			index:'./modules/main.js'
		},
		resolve:{
			root:'./modules/'
		}
		
	})).pipe(concat('XJsTool.js')).pipe(header(fs.readFileSync('./modules/copyright.txt', 'utf8'))).pipe(gulp.dest('bin/')).pipe(concat('XJsTool.min.js')).pipe(uglify({
		
		preserveComments:'license'
		
		
	})).pipe(gulp.dest('bin/'));
	
});
