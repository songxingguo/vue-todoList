const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
         rules: [
            {
                test:  /\.vue$/,
                loader: 'vue-loader'
            },
             {
                 test: /\.css$/,
                 use: ['style-loader','css-loader']
             },
             {
                 test: /\.(gif|jpg|jpeg|png|svg)$/,
                 use: [{
                     loader: 'url-loader',
                     options: {
                         limit: 1024,
                         name: '[name].[ext]'
                     }
                 }]
             },
             {
                 test: /\.styl$/,
                 use: [{
                     loader: 'style-loader' // creates style nodes from JS strings
                 }, {
                     loader: 'css-loader' // translates CSS into CommonJS
                 }, {
                     loader: 'stylus-loader' // compiles Less to CSS
                 }]
             }
         ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
}
