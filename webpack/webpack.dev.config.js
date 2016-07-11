import { resolve } from 'path';
import webpack from 'webpack';

const buildPath = resolve(__dirname, '..', 'public', 'dist');
const srcPath = resolve(__dirname, '..', 'src', 'index');

export default {
	debug:true,
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'babel-polyfill',
		srcPath
	],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel'
		},{
			test: /.css$/,
			loader: 'style-loader!css-loader'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
