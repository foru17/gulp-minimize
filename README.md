# gulp-minimize [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/foru17/gulp-minimize/status.svg)](https://david-dm.org/foru17/gulp-minimize) [![devDependencies Status](https://david-dm.org/scniro/gulp-clean-css/dev-status.svg)](https://david-dm.org/scniro/gulp-clean-css?type=dev)
[Gulp](http://gulpjs.com/) plugin for HTML minifiy.Based on minimize.

Thin wrapper over [Swaagie's](https://github.com/Swaagie) [minimize](https://github.com/Swaagie/minimize).

## Installation

Install package with NPM and add it to your development dependencies:

`npm install gulp-minimize`

## Usage

```javascript
var gulp = require('gulp');
var rename = require('gulp-rename');
var Minimize = require('gulp-minimize');

gulp.task('html', function() {
	gulp.src('./index.html')
	.pipe(Minimize())
	.pipe(rename('min.html'))
	.pipe(gulp.dest('.'));
});
```

## API

```javascript
Minimize({
	empty:true,
	cdata: true,
	comments: false,
	ssi: false,
	conditionals: true,
	spare: true,
	quotes: true,
	loose: true,
	lowerCaseAttributeNames: false
})
```

See [minimize](https://github.com/Swaagie/minimize#options-1) for details and behavior for each option; the params are passed straight through.

## License
MIT License (Expat)

[npm-url]: https://npmjs.org/package/gulp-minimize
[npm-image]: http://img.shields.io/npm/v/gulp-minimize.svg?style=flat
[travis-url]: https://travis-ci.org/foru17/gulp-minimize
[travis-image]: https://travis-ci.org/foru17/gulp-minimize.svg?branch=master
