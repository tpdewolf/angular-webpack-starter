'use strict';

var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var template = require('gulp-template');
var yargs = require('yargs');


var resolveToComponents = (glob = '') => {
	return path.join('app', 'components', glob);
};

var paths = {
	component: path.join(__dirname, 'generator', 'component/**/*.**'),
	page: path.join(__dirname, 'generator', 'page/**/*.**'),
};

gulp.task('component', function() {

	const name = yargs.argv.name;
	const parentPath = yargs.argv.parent || '';
	const destination = path.join(resolveToComponents(), parentPath, name);
	const cap = (val) => {
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	return gulp.src(paths.component)
	.pipe(template({
		name: name,
		upCaseName: cap(name)
	}))
	.pipe(rename((path) => {
		path.basename = path.basename.replace('temp', name);
	}))
	.pipe(gulp.dest(destination));
});

gulp.task('page', function() {

	const name = yargs.argv.name;
	const parentPath = yargs.argv.parent || '';
	const destination = path.join(resolveToComponents(), parentPath, name);
	const cap = (val) => {
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	return gulp.src(paths.page)
	.pipe(template({
		name: name,
		upCaseName: cap(name)
	}))
	.pipe(rename((path) => {
		path.basename = path.basename.replace('temp', name);
	}))
	.pipe(gulp.dest(destination));
});
