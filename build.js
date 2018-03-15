'use strict';

const concat = require('concat');
const glob = require('glob');
const jsmin = require('jsmin').jsmin;
const path = require('path');
const writeFileAtomic = require('write-file-atomic');
const makeDir = require('make-dir');
const colors = require('colors');

glob('src/**/*.js',{}, (err, files)=>{
	if (err)
		throw err;

	files.sort((a,b)=>{
		if (a.split('/').length < b.split('/').length) return -1;
		if (a.split('/').length > b.split('/').length) return 1;
		return 0;
	});
	concat(files).then((result)=>{
		let files = {
			'slimQuery': result,
			'slimQuery-min': jsmin(result)
		};
		makeDir('dist').then(dirPath => {
			dirPath += path.sep;
			for(let name in files){
				let fileName = dirPath + name + '.js';
				writeFileAtomic(fileName, files[name], {}, (err) => {
					if (err) {
						throw err;
					}
					console.log( colors.green('Saved:') + "\t" + colors.blue(name + '.js'));
				});
			}
		});
	});
})