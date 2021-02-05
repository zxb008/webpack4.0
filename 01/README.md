# webpack4.0
webpack4.0学习笔记

1. npm i webpack webpack-cli -D  
> 本地安装，开发环境

2. npx webpack 
> 找到 node_modules文件夹中的 ./bin文件夹中的 node webpack.cmd 文件并执行。webpack.cmd文件会做一次判断，去执行 ../webpack/bin/webpack.js 文件（执行此文件的前提是需要webpack-cli）;关于npx，http://www.ruanyifeng.com/blog/2019/02/npx.html

3. webpack 支持js的模块化（CommonJs,见：https://juejin.cn/post/6844904137159606285  https://javascript.ruanyifeng.com/nodejs/module.html）

4. 手动配置webpack(新建 webpack.config.js)

5. npx webpack --config webpack.config.my.js 
> 手动指定自定义的 webpack.config.my.js （--config表示需要设置）

6. 在 package.json 配置一下，那么执行 npm run build === npx webpack --config webpack.config.my.js
 ```javascript
"scripts": {
    "build":"webpack --config webpack.config.my.js"
}
  ```
  所以，可以这样直接配置,直接执行 npm run build
  ```javascript
"scripts": {
    "build":"webpack"
}
  ```
7. npm run build -- --config webpack.config.my.js, '--'代表往命令传递参数
```javascript
"scripts": {
    "build":"webpack"
},
  ```
8. webpack-dev-server,是webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。(默认会以build中的index.html,build中的index.html需要手动添加)

```javascript
devServer:{
        contentBase:path.resolve(__dirname,'build'),
        host:'localhost',
        port:8080,
        open:true,
        compress:true,
        progress:true 
}
  ```
9. 正如8中，index.html需要手动添加，这样显然是不合适，所以这里有个新插件：
htmlwebpackpluing：
 1.自动在内存中根据指定页面生成一个内存的页面
 2.自动把打包好的bundle.js追加到页面中去
这样的话，就不需要手动在build中添加index.html,然后直接运行npm run dev就可

10. 注意：webpack是能够webpack打包的时候只会处理JS之间的依赖关系！因为像 .css 这样的文件不是一个 JavaScript 模块，所以在JS中导入了css,例如：const style = require('./base.css');(https://blog.csdn.net/weixin_36185028/article/details/81120276?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

10. style.loader css.loader  https://blog.csdn.net/wu_xianqiang/article/details/104560613 


11. mini-css-extract-plugin插件 https://blog.csdn.net/weixin_44101052/article/details/86578351

12. postcss-loader 为css添加前缀的loader

13. optimize-css-assets-webpack-plugin 压缩css文件插件，在webpack中的optimization中配置

14. uglifyjs-webpack-plugin 压缩js文件插件，在webpack中的optimization中配置

15. babel-loader @balel/core @babel/preset-env @babel/plugin-proposal-class-properties





