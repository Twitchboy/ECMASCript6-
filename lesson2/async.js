const fs = require('fs');

// 第一阶段, 回调来实现异步
function readFile_one (cb) {
    return fs.readFile('../package.json', (err, data) => {
        if (err) return cb(err)
        cb(null, data)
    });
}

readFile_one((err, data) => {
    if (!err) {
        data = JSON.parse(data);
        console.log('第一阶段: ', data.name);
    }
});


// 第二阶段， Promise 方式
function readFile_two () {
    return new Promise((resolve, reject) => {
        const data = fs.readFile('../package.json', (err, data) => {
            if (err) reject(err)
            else resolve(data);
        });
    })
}

readFile_two()
    .then(JSON.parse)
    .then((data) => {
        console.log('第二阶段:', data.name)
    })
    .catch((err) => {
        console.log(err)
    });

// 第三阶段  Generator Funtion + co + promise
const util = require('util');
const co = require('co');

co(function* () {
    let data = yield util.promisify(fs.readFile)('../package.json'); 

    data = JSON.parse(data);
    
    console.log('第三阶段:', data.name);
});

// 第四阶段 async await

const readAsync = util.promisify(fs.readFile);

async function init() {
    let data = await readAsync('../package.json');

    if (!data) console.log(data);
    else data = JSON.parse(data);

    console.log('第四阶段:', data.name);
}

init();