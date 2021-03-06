const fs = require('fs');

const basePath = './public/images';
const ignore = '.DS_Store';

const files = fs.readdirSync(basePath).filter( item => item !== ignore );
const imageRegex = /(?:jpg|jpeg|gif|png)$/i;

let result;
let log = [];

const generateUniqueId = () => Math.random().toString(36).substr(2, 9);

const generateFSTree = ( files, path ) => {
	console.log('files', files);
	files = files.filter( item => item !== ignore );
	console.log('files filtered', files);
	return Array.prototype.map.call( files, item => {
		let currentPath = `${path}/${item}`;
		if ( fs.lstatSync(currentPath).isDirectory() ) {
			return {
				key: item,
				id: generateUniqueId(),
				isDir: true,
				children: generateFSTree(fs.readdirSync(currentPath) , currentPath)
			};
		} else if ( imageRegex.test(item) ) {
			currentPath = `${path}/${encodeURIComponent( item )}`;
			return {
				key: item,
				isDir: false,
				path: currentPath.replace('./public/', '')
			};
		}
	});
};

result = generateFSTree(files, basePath);

const str = `
const result = ${JSON.stringify(result)}; export default result;
`;

fs.writeFile(`./src/data/config.js`, str.trim(), function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("The file was saved!");
});

fs.writeFile(`./src/data/log.js`, JSON.stringify(log).trim(), function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("The file was saved!");
});
