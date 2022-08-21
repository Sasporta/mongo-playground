import { Request } from 'express';

import { getLimit } from '../helpers';
import Company from '../../models/Company';

export const getCompanies = async ({ query: { limit } }: Request) => ({
	statusCode: 200,
	content: await Company.find().limit(getLimit(+limit)),
});
