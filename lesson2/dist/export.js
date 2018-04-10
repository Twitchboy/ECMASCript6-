"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var name = exports.name = "Junting";
var getName = exports.getName = function getName() {
    return name;
};

var age = 18;
// 这种方式导出， 才可以这样导入： import age from './export.js'
// export default age; 

exports.name2 = name;
exports.age2 = age;
//# sourceMappingURL=export.js.map