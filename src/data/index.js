const fs = require('fs');

const basePath = './public/images';
const ignore = '.DS_Store';

const files = fs.readdirSync(basePath).filter( item => item !== ignore );
const imageRegex = /(?:jpg|jpeg|gif|png)$/i;

let result;
let log = [];

const generateFSTree = ( files, path ) => {
	return Array.prototype.map.call( files, item => {
		let currentPath = `${path}/${item}`;
		if ( fs.lstatSync(currentPath).isDirectory() ) {
			return {
				key: item,
				isDir: true,
				children: generateFSTree(fs.readdirSync(currentPath) , currentPath)
			};
		} else if ( imageRegex.test(item) ) {
			return {
				key: item,
				isDir: false,
				path: currentPath.replace('./public/', '')
			};
		}
	});
};

result = generateFSTree(files, basePath);

//files.forEach( item => {
	//let items = [];
	//let currentPath = `${basePath}/${item}`;
	//if ( item !== ignore && fs.lstatSync(currentPath).isDirectory() ) {
		//items = fs.readdirSync(currentPath);
		//result.push({
			//folder: item,
			//nodes: items.map( node => {
				//return {
					//key: node,
					//path: `${currentPath}/${node}`.replace('./public/', '')
				//};
			//})
		//});
	//}
//});

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
