import { promisify } from 'util';
import { resolve as r } from 'path';
import { readFile, writeFileSync as wfs } from 'fs';
import * as qs from 'querystring';
import {name, getName} from './export';
import { name2 as name3, age2 as age3 } from './export'
// promisify(readFile)(r(__dirname, '../../package.json'))
//     .then(JSON.parse)
//     .then(data => {
//         console.log(data.name);
//         wfs(r(__dirname, './name'), String(data.name), 'utf-8');
//     });

console.log(name);
console.log(getName());

console.log('as: ', name3);
console.log('as: ', age3);

