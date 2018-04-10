const fs = require('fs');

// ES5 运行时加载
fs.readFile()
// ES6 运行时加载
const { readFile } = require('fs');     // 通过解构发式来加载

// ES6 import 静态加载，编译时 加载进来；
// 目前 node 版本还不支持 import/export
// 需要 babel 来编译下
import { readFile as readFile2 } from 'fs'

