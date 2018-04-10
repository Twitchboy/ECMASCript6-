/*
 * Generator 生成器
 * Generator 生成器 的本质是: Iterator 迭代器
 * Iterator 迭代器 不是一个对象和语法，而是一个协议，只要遵循了此协议就是一个 Iterator。
 * Iterator（迭代器、遍历器）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。
 * @Author: Junting 
 * @Date: 2018-04-09 23:53:45 
 * @Last Modified by: Junting
 * @Last Modified time: 2018-04-10 00:17:07
 */

 /**
  * * Iterator 的作用：
  * ? 1. 为各种数据结构，提供一个统一的、简便的访问接口
  * ? 2. 使得数据结构的成员能够按某种次序排列
  * ? 3. ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费 
  * @param {array} arr 
  */
function makeIterator (arr) {
    let nextIndex = 0;

    // 返回一个迭代器
    return {
        next: () => {
            // next() 方法返回的结果对象
            if (nextIndex < arr.length) {
                return { value: arr[nextIndex++], done: false }
            }
            else {
                return { done: true }
            }
        }
    }
}

const it = makeIterator(['吃饭', '睡觉', '打豆豆']);

console.log('首先', it.next().value);
console.log('其次', it.next().value);
console.log('然后', it.next().value);
console.log('最后', it.next().done);


// `Generator` 生成器，就是生成一个东东； 生成器函数就是一个能够返回` cIterator` 迭代器的函数。本质还是操作 Iterator，只不过借助于 `Genetator` 生成器函数来完成这件事情。从语法来看只不过是比普通函数多了一个 `*`号，每一次迭代通过`yeild`关键字来实现。

// Generator的出现,简化整个 Iterator 迭代器创建的过程，同时保证逻辑的清晰性
// yield 还可以模拟一个断点执行获得结果

function* makeIterator2 (arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const gen = makeIterator2(['吃饭', '睡觉', '打豆豆']);
console.log('首先', gen.next().value);
console.log('其次', gen.next().value);
console.log('然后', gen.next().value);
console.log('最后', gen.next().done);

