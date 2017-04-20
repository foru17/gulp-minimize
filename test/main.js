/* global describe, it */
'use strict'

require('mocha');
var fs = require('fs');
var should = require('should');
var path = require('path');

var gutil = require('gulp-util');
var Minimize = require('../');


describe('gulp-minimize', function() {

	var expectedFile = new gutil.File({
		path: 'test/expected/output.html',
		cwd: 'test/',
		base: 'test/expected',
		contents: fs.readFileSync('test/expected/output.html')
	});

	it('should produce compressed html output when minimize a file', function(done) {

		var srcFile = new gutil.File({
			path: 'test/fixtures/index.html',
			cwd: 'test/',
			base: 'test/fixtures',
			contents: fs.readFileSync('test/fixtures/index.html')
		});

		var stream = Minimize();

		stream.on('error', function(err) {
			should.exist(err)
			done(err)
		})

		stream.on('data', function(newFile) {
			should.exist(newFile)
			should.exist(newFile.contents)

			String(newFile.contents).should.equal(String(expectedFile.contents))
			done()
		})

		stream.write(srcFile)
		String(path.extname(srcFile.path)).should.equal('.ejs')

		stream.end()

	})

})