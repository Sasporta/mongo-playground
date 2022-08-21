import { Request } from 'express';

import { hitOrThrow } from '../helpers';
import Company from '../../models/Company';
import Employee from '../../models/Employee';

export const createEmployee = async ({
	body: { name, age, companyId: cId, managerId: mId },
}: Request) => {
	const { id: companyId } = hitOrThrow(await Company.findById(cId), 422);

	const { id: managerId } = mId
		? hitOrThrow(await Employee.findById(mId), 422)
		: { id: null };

	return {
		statusCode: 201,
		content: await Employee.create({ name, age, companyId, managerId }),
	};
};
