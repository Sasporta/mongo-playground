import express from 'express';

import { controllerWrapper } from '../controllers/helpers';
import { getEmployee } from '../controllers/employees/getOne';
import { createEmployee } from '../controllers/employees/post';
import { getEmployees } from '../controllers/employees/getAll';
import { updateEmployee } from '../controllers/employees/update';
import { deleteEmployee } from '../controllers/employees/delete';
import { getCousins } from '../controllers/employees/getAllCousins';
import { employeeSchema } from '../middleware/reqValidation/employeeSchema';
import { validateSchema } from '../middleware/reqValidation/validateSchema';

const router = express.Router();

router.get('/employees', controllerWrapper(getEmployees));

router.post(
	'/employees',
	validateSchema(employeeSchema.create),
	controllerWrapper(createEmployee),
);

router.get('/employees/:id', controllerWrapper(getEmployee));

router.delete('/employees/:id', controllerWrapper(deleteEmployee));

router.get('/employees/cousins/:id', controllerWrapper(getCousins));

router.patch(
	'/employees/:id',
	validateSchema(employeeSchema.update),
	controllerWrapper(updateEmployee),
);

export default router;
