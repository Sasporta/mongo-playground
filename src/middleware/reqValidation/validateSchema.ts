import { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';

import { responses } from '../../controllers/helpers';

export const validateSchema =
	(schema: ObjectSchema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validateAsync(req.body);

			next();
		} catch (error) {
			console.log(error);

			return res.status(422).json(responses[422]);
		}
	};
