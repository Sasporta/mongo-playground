import { Request } from 'express';

import Company from '../../models/Company';

export const createCompany = async ({ body: { name, country } }: Request) => ({
	statusCode: 201,
	content: await Company.create({ name, country }),
});
