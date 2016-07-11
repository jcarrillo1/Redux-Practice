const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, '..', 'src', 'index');
const buildPath = path.resolve(__dirname, '..', 'public', 'dist');

module.exports = {
	devtool: 'source-map',
	entry: [
		srcPath
	],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
