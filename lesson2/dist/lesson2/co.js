'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var co = require('co');
var fetch = require('node-fetch');

// co 让每一个暂停，可以自动的一步步执行
// co 缺点：
// 1. 不能 yeild 字符串、boolean
co( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, movie, summary;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.douban.com/v2/movie/1291843');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    movie = _context.sent;
                    summary = movie.summary;


                    console.log('summary', summary);

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/**
 * 模拟下 co 来实现上面的代码
 * @param {generator} generator 
 */
function run(generator) {
    var iterator = generator();
    var it = iterator.next();
    var promise = it.value;

    promise.then(function (data) {
        var it2 = iterator.next(data);
        var promise2 = it2.value;

        promise2.then(function (data2) {
            iterator.next(data2);
        });
    });
}

run( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var res, movie, summary;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return fetch('https://api.douban.com/v2/movie/1291843');

                case 2:
                    res = _context2.sent;
                    _context2.next = 5;
                    return res.json();

                case 5:
                    movie = _context2.sent;
                    summary = movie.summary;


                    console.log('summary', summary);

                case 8:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));
//# sourceMappingURL=co.js.map