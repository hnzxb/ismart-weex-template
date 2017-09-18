var path        = require("path");
var webpack     = require('webpack');
var buildConfig = require("./webpack.weex.build.js");
var devConfig   = require("./webpack.weex.dev.js");
var resolve     = function (p) {return path.resolve(__dirname, "../../", p);}

//修改路径
buildConfig.output.path = resolve('./bin/www/dist');
webpack(buildConfig, function () {
    console.log("fuck&love webpack")
})

module.exports = devConfig;