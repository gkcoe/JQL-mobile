var webpack = require('webpack')
var path = require('path');
var entry = ['./src/main'],
    cdnPrefix = "",
    buildPath = "/static/",
    publishPath = cdnPrefix + buildPath,
	plugins = []
module.exports = {
    entry: entry,
    output: {
         path: __dirname + buildPath,
         publicPath: '/static/',
         filename: 'build.js'
    },
    module: {
        noParse: [],
        loaders:
            [{test: /\.vue$/,loader: 'vue',devtool: 'source-map'},
             {test: /\.js$/,exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,loader: 'babel'},
             {test: /\.(jpg|png|gif|svg)$/,loader: "file-loader?name=images/[hash].[ext]"}
            ]
	},
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
		alias: {
			'vux-ui': 'vux/dist/components/'
		 }
    },
    devtool: '#source-map',
    plugins:plugins
}

