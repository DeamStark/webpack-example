/**
 * Created by CDJ on 2016/12/14.
 */
var path = require('path');
var HtmlwebpackPlugin =require('html-webpack-plugin');
//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports={
    //项目文件夹，可以直接用文件夹名称，默认会找index.js，也可以确定是那个文件名字
    entry:APP_PATH,
    //输出的文件名，合并后的js会命名为bundle.js
    output:{
        path:BUILD_PATH,
        filename:'bundle.js'
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css','sass'],
                include: APP_PATH
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url?limit=40000',
                include: APP_PATH
            },
        //  添加es6支持
            {
                test:/\.jsx?$/,
                loader:'babel',
                include:APP_PATH,
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    //加载插件
    plugins:[
        new HtmlwebpackPlugin({
            title:'Hello World app'
        })
    ]

};