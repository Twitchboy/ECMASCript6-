'use strict';

var _util = require('util');

var _path = require('path');

var _fs = require('fs');

var _querystring = require('querystring');

var qs = _interopRequireWildcard(_querystring);

var _export = require('./export');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// promisify(readFile)(r(__dirname, '../../package.json'))
//     .then(JSON.parse)
//     .then(data => {
//         console.log(data.name);
//         wfs(r(__dirname, './name'), String(data.name), 'utf-8');
//     });

console.log(_export.name);
console.log((0, _export.getName)());

console.log('as: ', _export.name2);
console.log('as: ', _export.age2);
//# sourceMappingURL=import.js.map