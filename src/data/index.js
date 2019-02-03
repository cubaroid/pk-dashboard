const fs = require('fs');
//import fs from 'fs'

const basePath = './public/images';
const ignore = '.DS_Store';

const files = fs.readdirSync(basePath);

const result = [];

files.forEach( item => {
	let items = [];
	let currentPath = `${basePath}/${item}`;
	if ( item !== ignore && fs.lstatSync(currentPath).isDirectory() ) {
		items = fs.readdirSync(currentPath);
		result.push({
			folder: item,
			nodes: items.map( node => {
				return {
					key: node,
					path: `${currentPath}/${node}`.replace('./public/', '')
				};
			})
		});
	}
});

const str = `
	const result = ${JSON.stringify(result)}; export default result;
`;

fs.writeFile(`./src/data/config.js`, str.trim(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
