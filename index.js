'use strict';

var through2 = require('through2');
var Minimize = require('minimize');
var gutil = require('gulp-util');


module.exports = function (options) {

    options = options || {};
	var minimize = new Minimize(options);

    return through2.obj(function(file,encoding,callback){

        if (!file) {
            this.emit('error', new gutil.PluginError('gulp-minimize', 'files can not be empty'));
            return callback();
        }

        if (file.isNull()) {
            return callback();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-minimize', 'streaming not supported'));
            return callback();
        }

        var contents = file.contents.toString('utf-8');

        try {
            var minifyHtmlString = minimize.parse(contents);
            file.contents = new Buffer(minifyHtmlString)
        }catch(e){
            this.emit('error', new gutil.PluginError('gulp-minimize', e +  'minify html "' + gutil.colors.red(file.path) + '" failed'));
            return callback();
        }
        this.push(file);
        callback();
    })  

};