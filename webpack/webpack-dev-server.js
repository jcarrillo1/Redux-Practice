import { resolve } from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.dev.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);
const options = {
	quiet: true,
	noInfo: true,
	hot: true,
	inline: true,
	publicPath: config.output.publicPath,
	stats: { colors: true }
};

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
	res.sendFile(resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Webpack served on port ${PORT}`);
	}
});
