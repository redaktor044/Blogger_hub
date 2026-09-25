import {mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {themes} from '../dist/catalog.js';
import {packageFiles} from '../dist/engine.js';
import {zipBytes} from '../dist/zip.js';
const target=path.resolve(process.argv[2]||'exports');
await mkdir(target,{recursive:true});
for(const lang of ['pl','en'])for(const theme of themes){const files=packageFiles(theme,lang);const folder=path.join(target,lang,theme.id);await mkdir(folder,{recursive:true});for(const [name,content] of Object.entries(files)){await mkdir(path.dirname(path.join(folder,name)),{recursive:true});await writeFile(path.join(folder,name),content);}await writeFile(path.join(target,`forma-${theme.id}-${lang}.zip`),zipBytes(files));}
console.log('Exported 24 packages (12 themes × PL/EN) to '+target);
