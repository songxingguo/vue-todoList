const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";

const config = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: [ 'url-loader' ]
        },  {
            test: /\.styl$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'stylus-loader' // compiles Less to CSS
            }]
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
            template: 'src/index.html'
        })
    ]
}

if (isDev) {
    config.devTool = '#cheap-module-eval-source-map'
  config.devServer = {
      port: 8000,
      host: '0.0.0.0',
      overlay: {
          errors: true,
      },
      hot: true,
  }
  config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NormalModuleReplacementPlugin()
  )
}

module.exports = config