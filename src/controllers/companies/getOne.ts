import { Request } from 'express';

import { hitOrThrow } from '../helpers';
import Company from '../../models/Company';

export const getCompany = async ({ params: { id } }: Request) => ({
	statusCode: 200,
	content: hitOrThrow(await Company.findById(id)),
});
