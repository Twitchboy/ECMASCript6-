const co = require('co');
const fetch = require('node-fetch');

// co 让每一个暂停，可以自动的一步步执行
// co 缺点：
// 1. 不能 yeild 字符串、boolean
co(function* () {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843');
    const movie = yield res.json();
    const summary = movie.summary;

    console.log('summary', summary);
});

/**
 * 模拟下 co 来实现上面的代码
 * @param {generator} generator 
 */
function run (generator) {
    const iterator = generator();
    const it = iterator.next();
    const promise = it.value;

    promise.then(data => {
        const it2 = iterator.next(data);
        const promise2 = it2.value;

        promise2.then(data2 => {
            iterator.next(data2);
        });
    })
}

run(function* () {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843');
    const movie = yield res.json();
    const summary = movie.summary;

    console.log('summary', summary);
});