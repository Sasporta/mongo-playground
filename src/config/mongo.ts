import config from '.';
import mongoose from 'mongoose';

export const connectMongo = async () => {
	try {
		const { dbUrl } = config;

		await mongoose.connect(dbUrl);

		console.log('Database Connected');
	} catch (error) {
		console.log('db error', error);
	}
};
