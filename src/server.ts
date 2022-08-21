import app from './app';
import config from './config';
import { connectMongo } from './config/mongo';

const { port } = config;

app.listen(port, async () => {
	connectMongo();

	console.log('App running on port ', port);
});
