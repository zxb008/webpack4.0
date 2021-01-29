# webpack4.0
webpack4.0学习笔记

1. npm i webpack webpack-cli -D  
> 本地安装，开发环境

2. npx webpack 
> 找到 node_modules文件夹中的 ./bin文件夹中的 node webpack.cmd 文件并执行 2. webpack.cmd文件会做一次判断，去执行 ../webpack/bin/webpack.js 文件（执行此文件的前提是需要webpack-cli）;关于npx，http://www.ruanyifeng.com/blog/2019/02/npx.html

3. webpack 支持js的模块化（CommonJs,见：https://juejin.cn/post/6844904137159606285  https://javascript.ruanyifeng.com/nodejs/module.html）

4. 手动配置webpack(新建 webpack.config.js)

5. npx webpack --config webpack.config.my.js 
> 手动指定自定义的 webpack.config.my.js 



