const fs = require('fs');

// 老式写法
fs.readFile('../package.json', (err, data) => {
    if (err) return console.log(err);

    data = JSON.parse(data);

    console.log(data);
})

// 使用 Promise 进行封装 2017年
function readFileAsync (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync('../package.json')
    .then(data => {
        data = JSON.parse(data);

        console.log(data.name);
    })
    .catch(err => {
        console.log(err);
    });

// nodejs 8.x  utils 模块提供的  promisify() 轻易的包装一个回调式的API
const util = require('util');

util.promisify(fs.readFile)('../package.json')
    .then(JSON.parse)
    .then(data => {
        console.log(data.name);
    })
    .catch(err => {
        console.log(err);
    })

