let path = require('path')
let fs = require('fs')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let tpl = fs.readFileSync('./tpl/template.tpl', 'utf8');
console.log(tpl)
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            tpl: tpl,
            template: './entry/index.html'
        }),
    ]
}