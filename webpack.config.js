var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new LiveReloadPlugin({
            ignore: /\.(css|scss|sass)$/ 
        }),
        new ExtractTextPlugin('app.css'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    'ng-annotate-loader',
                    'babel-loader?presets[]=env'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)([?]?.*)$/,
                use: [
                    'file-loader?name=fonts-build/[name].[ext]'
                ]
            },
            {
                test: /\.json$/,
                use: [
                    'json-loader'
                ]
            }
        ]
    }
};