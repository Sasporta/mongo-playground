import Joi from 'joi';
import { CompanyDocument } from '../../models/Company';

export const companySchema = {
	create: Joi.object<CompanyDocument>({
		name: Joi.string().required(),
		country: Joi.string().required(),
	}),
	update: Joi.object<CompanyDocument>({
		name: Joi.string(),
		country: Joi.string(),
	}),
};
