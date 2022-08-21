import { Request } from 'express';

import Employee from '../../models/Employee';
import { getLimit, hitOrThrow } from '../helpers';

export const getCousins = async ({
	params: { id },
	query: { limit },
}: Request) => {
	const child = await hitOrThrow(await Employee.findById(id, { managerId: 1 }));

	const parent = await hitOrThrow(
		await Employee.findById(child.managerId, { managerId: 1 }),
	);

	const grandfather = await hitOrThrow(
		await Employee.findById(parent.managerId),
	);

	const uncles = await Employee.find({
		$and: [{ managerId: grandfather.id }, { _id: { $ne: parent.id } }],
	});

	return {
		statusCode: 200,
		content: await Employee.find({
			managerId: { $in: uncles.map(v => v.id) },
		}).limit(getLimit(+limit)),
	};
};
