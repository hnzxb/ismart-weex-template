var path              = require("path");
var webpack           = require('webpack');
var merge             = require('webpack-merge');
var networkip         = require('ip').address();
var HtmlWebpackPlugin = require('html-webpack-plugin');
var common            = require('./webpack.common.js');
var resolve           = function (p) {return path.resolve(__dirname, "../../", p);}

//=============================
//输出app.weex.js
//=============================
var webconfig = merge(common, {
    output   : {
        path    : resolve('./dist'),
        filename: "[name].web.js"
    },
    module   : {
        rules: [
            {test: /\.vue$/, use: {loader: "vue-loader"}},
        ]
    },
    devServer: {
        //contentBase: resolve('./'),
        compress: true,
        open    : true,
        port    : 9000,
        host    : networkip,
    },
    plugins  : [
        new HtmlWebpackPlugin({
            title   : 'My App',
            template: resolve('./bin/www/index.html'),
            inject  : false,
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            title   : 'WeexDEMO',
            template: resolve('./bin/www/weex.html'),
            inject  : false,
            filename: 'weex.html'
        })
    ]
})


module.exports = webconfig;