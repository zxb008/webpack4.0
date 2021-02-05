const path = require('path');
// console.log(path.resolve(__dirname)); // \personalDevelopment\webpack4.0\01
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:path.resolve(__dirname,'build')
    },
    devServer:{
        contentBase:path.resolve(__dirname,'build'),
        host:'localhost',
        port:8080,
        open:true,
        compress:true,
        progress:true 
    }
}