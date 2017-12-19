const path = require('path')
const htmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugins({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ]
}