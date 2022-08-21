import express from 'express';

import { controllerWrapper } from '../controllers/helpers';
import { getCompany } from '../controllers/companies/getOne';
import { createCompany } from '../controllers/companies/post';
import { getCompanies } from '../controllers/companies/getAll';
import { updateCompany } from '../controllers/companies/update';
import { deleteCompany } from '../controllers/companies/delete';
import { companySchema } from '../middleware/reqValidation/companySchema';
import { validateSchema } from '../middleware/reqValidation/validateSchema';

const router = express.Router();

router.get('/companies', controllerWrapper(getCompanies));

router.post(
	'/companies',
	validateSchema(companySchema.create),
	controllerWrapper(createCompany),
);

router.get('/companies/:id', controllerWrapper(getCompany));

router.delete('/companies/:id', controllerWrapper(deleteCompany));

router.patch(
	'/companies/:id',
	validateSchema(companySchema.update),
	controllerWrapper(updateCompany),
);

export default router;
