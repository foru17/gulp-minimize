# gulp-minimize [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
[Gulp](http://gulpjs.com/) plugin for HTML minifiy.Based on minimize.

Thin wrapper over [Swaagie's](https://github.com/Swaagie) [minimize](https://github.com/Swaagie/minimize).

## Usage

```javascript
var gulp = require('gulp');
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
	comments: false,
	ssi: false,
	conditionals: true,
	spare: true 
}))
```

See [minimize](https://github.com/Swaagie/minimize#options-1) for details and behavior for each option; the params are passed straight through.

## License
MIT License (Expat)

[npm-url]: https://npmjs.org/package/gulp-minimize
[npm-image]: http://img.shields.io/npm/v/gulp-minimize.svg?style=flat
[travis-url]: https://travis-ci.org/foru17/gulp-minimize
[travis-image]: https://travis-ci.org/foru17/gulp-minimize.svg?branch=master
