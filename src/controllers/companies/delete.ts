import { Request } from 'express';

import { hitOrThrow } from '../helpers';
import Company from '../../models/Company';

export const deleteCompany = async ({ params: { id } }: Request) => ({
	statusCode:
		hitOrThrow((await Company.deleteOne({ _id: id })).deletedCount) && 204,
});
