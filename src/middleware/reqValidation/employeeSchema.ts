import Joi from 'joi';
import { EmployeeDocument } from '../../models/Employee';

export const employeeSchema = {
	create: Joi.object<EmployeeDocument>({
		name: Joi.string().required(),
		age: Joi.number().required(),
		companyId: Joi.string()
			.regex(/^[0-9a-fA-F]{24}/)
			.required(),
		managerId: Joi.string().regex(/^[0-9a-fA-F]{24}/),
	}),
	update: Joi.object<EmployeeDocument>({
		name: Joi.string(),
		age: Joi.number(),
		companyId: Joi.string().regex(/^[0-9a-fA-F]{24}/),
		managerId: Joi.string().regex(/^[0-9a-fA-F]{24}/),
	}),
};
