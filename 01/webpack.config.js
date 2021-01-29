const path = require('path');
// console.log(path.resolve(__dirname)); // \personalDevelopment\webpack4.0\01
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:path.resolve(__dirname,'build')
    }
}