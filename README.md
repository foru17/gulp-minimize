# gulp-minimize [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
[Gulp](http://gulpjs.com/) Gulp plugin for HTML minifiy.Based on minimize.

Thin wrapper over[minimize](https://github.com/Swaagie/minimize), which does all the hard work.

## Usage

This plugin is authored in ES6, so until Node picks up ES6 module support you'll need to pluck the default property from the require'd import.

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

```typescript
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
