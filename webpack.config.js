const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";
const ExtractPlugin = require('extract-text-webpack-plugin');

const config = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: [ 'url-loader' ]
        }, {
            test: /\.jsx$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

if (isDev) {
    config.module.rules.push({
        test: /\.styl/,
        use: [{
            loader: 'style-loader' // creates style nodes from JS strings
        }, {
            loader: 'css-loader' // translates CSS into CommonJS
        }, {
            loader: "postcss-loader",
            options: {
                sourceMap: true
            }
        }, {
            loader: 'stylus-loader' // compiles Less to CSS
        }]
    })
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        // overlay: {
        //     errors: true,
        // },
        open: true,
        hot: true,
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NormalModuleReplacementPlugin()
    )
} else {
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push({
        test: /\.styl/,
        use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use: [{
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: "postcss-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'stylus-loader' // compiles Less to CSS
            }]
        })
    })
    config.plugins.push(
        new ExtractPlugin('styles.[hash:8].css')
    )
}

module.exports = config
