var gulp=require('gulp');
var concat=require('gulp-concat');
var amdOptimize=require('amd-optimize');
var req=require('requirejs');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var header=require('gulp-header');
var fs = require('fs');

gulp.task('default',function(){
	
	
	var txt=fs.readFileSync('./modules/copyright.txt', 'utf8');
	txt=txt.replace('{{BuildDate}}',new Date().toString());
	
	
	
	gulp.src('./modules/*.js').pipe(webpack({
		
		entry:{
			
			index:'./modules/main.js'
		},
		resolve:{
			root:'./modules/'
		}
		
	})).pipe(concat('XJsTool.js'))
	.pipe(header(txt))
	.pipe(gulp.dest('build/'))
	.pipe(concat('XJsTool.min.js'))
	.pipe(uglify())
	.pipe(header(txt))
	.pipe(gulp.dest('build/'));
	
});
