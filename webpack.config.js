var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	debug: true,
	devtool: 'source-map',
	entry: './app/app.js',
	output: {
		path: __dirname+'/www',
		filename: 'bundle.js'
	},
	plugins: [
		new LiveReloadPlugin(),
		new ExtractTextPlugin('app.css'),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				loader: 'ng-annotate!babel-loader?presets[]=es2015'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)([?]?.*)$/,
				loader: 'file-loader?name=fonts-build/[name].[ext]'
			}
		]
	}
};