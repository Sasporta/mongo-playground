import { Request } from 'express';

import Company from '../../models/Company';
import { hitOrThrow, validateAtLeastOneParamExists } from '../helpers';

export const updateCompany = async ({
	params: { id },
	body: { name, country },
}: Request) => ({
	statusCode: 200,
	content:
		validateAtLeastOneParamExists(name, country) &&
		hitOrThrow(
			await Company.findByIdAndUpdate(id, { name, country }, { new: true }),
		),
});
