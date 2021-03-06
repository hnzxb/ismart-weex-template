var path               = require("path");
var webpack            = require('webpack');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var resolve            = function (p) {return path.resolve(__dirname, "../../", p);}

module.exports = {
    entry    : {
        app: [resolve('./src/app.js')]
    },
    context  : resolve("./"),
    module   : {
        rules: [
            {test: /(\.js)$/, use: {loader: "babel-loader", options: {presets: ["es2015"]}}, include: [resolve('./src')]},
            {test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=./assets/fonts/[name].[ext]'},
            {test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=./assets/images/[name].[ext]'},
        ]
    },
    resolve  : {
        alias: {
            'src'       : resolve('./src'),
            'components': resolve('./src/views/components'),
            'utils'     : resolve('./src/utils'),
            'store'     : resolve('./src/store'),
            'router'    : resolve('./src/routes'),
            'views'     : resolve('./src/views'),
            'assets'    : resolve('./src/assets'),
        }
    },
    plugins  : [new CleanWebpackPlugin([resolve('./dist')]),],
    externals: {}
};

