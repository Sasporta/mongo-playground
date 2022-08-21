import { Request } from 'express';

import Company from '../../models/Company';
import Employee from '../../models/Employee';
import { hitOrThrow, validateAtLeastOneParamExists } from '../helpers';

export const updateEmployee = async ({
	params: { id },
	body: { companyId: cId, managerId: mId, name, age },
}: Request) => {
	validateAtLeastOneParamExists(name, age, cId, mId);

	const { id: companyId } = cId
		? hitOrThrow(await Company.findById(cId), 422)
		: { id: undefined };

	const { id: managerId } = mId
		? hitOrThrow(await Employee.findById(mId), 422)
		: mId === null
		? { id: null }
		: { id: undefined };

	return {
		statusCode: 200,
		content: hitOrThrow(
			await Employee.findByIdAndUpdate(
				id,
				{ name, age, companyId, managerId },
				{ new: true },
			),
		),
	};
};
