import { resolve, join } from 'path';
import express from 'express';

const buildPath = resolve(__dirname, '..', 'public');
const indexFile = join(buildPath, 'index.html');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(buildPath));

app.get('*', (req, res) => {
	res.sendFile(indexFile);
});

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Webpack served on port ${PORT}`);
	}
});
