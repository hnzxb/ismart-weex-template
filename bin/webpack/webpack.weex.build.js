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
var appconfig = merge(common, {
    watch  : true,
    output : {
        path    : resolve('./dist'),
        filename: "[name].weex.js"
    },
    module : {
        rules: [
            {test: /\.vue$/, use: {loader: "weex-loader"}},
        ]
    },
    plugins: [
        new webpack.BannerPlugin({banner: '// { "framework": "Vue" }\n', raw: true})
    ],
})

module.exports = appconfig;