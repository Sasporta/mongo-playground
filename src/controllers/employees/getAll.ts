import { Request } from 'express';

import { getLimit } from '../helpers';
import Employee from '../../models/Employee';

export const getEmployees = async ({
	query: { companyId, managerId, limit },
}: Request) => {
	const whereStatement: { companyId?: string; managerId?: string } = {};

	if (companyId) whereStatement.companyId = companyId as string;

	if (managerId)
		whereStatement.managerId =
			managerId === 'null' ? null : (managerId as string);

	return {
		statusCode: 200,
		content: await Employee.find(whereStatement).limit(getLimit(+limit)),
	};
};
