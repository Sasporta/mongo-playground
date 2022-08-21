import { Request } from 'express';

import { hitOrThrow } from '../helpers';
import Employee from '../../models/Employee';

export const deleteEmployee = async ({ params: { id } }: Request) => ({
	statusCode:
		hitOrThrow((await Employee.deleteOne({ _id: id })).deletedCount) && 204,
});
