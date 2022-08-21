import { Request } from 'express';

import { hitOrThrow } from '../helpers';
import Employee from '../../models/Employee';

export const getEmployee = async ({ params: { id } }: Request) => ({
	statusCode: 200,
	content: hitOrThrow(await Employee.findById(id)),
});
