'use strict';

const babel = require('babel-core');
const concat = require('concat');
const glob = require('glob');
const jsmin = require('jsmin').jsmin;
const path = require('path');
const writeFileAtomic = require('write-file-atomic');
const makeDir = require('make-dir');
const colors = require('colors');

glob('src/**/*.js',{}, (err, files)=>{
	files.sort((a,b)=>{
		if (a.split('/').length < b.split('/').length) return -1;
		if (a.split('/').length > b.split('/').length) return 1;
		return 0;
	});

	if (err) {
		throw err;
	}
	concat(files).then((result)=>{
		result = babel.transform(result, {
			presets: [
				['env', {
					targets: {
						browsers: ['last 2 versions']
					}
				}]
			]
		});

		let files = {
			'slimQuery': result.code,
			'slimQuery-min': jsmin(result.code)
		};
		makeDir('dist').then(dirPath => {
			dirPath += path.sep;
			for(let name in files){
				let fileName = dirPath + name + '.js';
				writeFileAtomic(fileName, files[name], {}, (err) => {
					if (err) {
						throw err;
					}
					console.log( colors.green('Saved:' + "\t" + name + '.js'));
				});
			}
		});
	});
})