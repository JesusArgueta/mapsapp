const{writeFileSync, mkdirSync} = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts'

const envFileContnent = `
export const environment = {
  mapbox_key: "${process.env['MAPBOX_KEY']}",

};
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync( targetPath, envFileContnent );
