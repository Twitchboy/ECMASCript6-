# ES6/ES7/ES8 语法知识点

## package.json 脚本配置

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    # 实时监视源码有没有修改并重启node服务
    "dev_import": "nodemon -w lesson2/src/import.js --exec \"babel-node lesson2/src/import.js --presets env\"",
    # 删除 lesson2/dist 目录 后重新编译
    "build_lesson2": "rimraf lesson2\/dist && babel lesson2/src -s -D -d lesson2/dist --presets env",
    "build_generator": "babel lesson2\/co.js -s -D -d lesson2\/dist --presets env"
  },

```

## npm 扩展依赖

* `Nodemon` 是一个实用程序，它将监视源中的任何更改并自动重新启动服务器。
* `rimraf` A `rm -rf` util for nodejs

## .babelrc 配置文件

```
{
    # 根据当前的环境，把不支持的ES6的新特性编译成ES5
    "presets": [
        [
            "env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ],
    "plugins": [
        [
            # ES7 的Generator 因为 目前的babel 只支持ES6，所以还需要插件来进行支持
            "transform-runtime", {
                "polyfill": false,
                "regenerator": true
            }
        ]
    ]
}
```