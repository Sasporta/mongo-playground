import { Request, Response } from 'express';

export const responses = {
	204: {
		description: 'Successful request, no content',
	},
	404: {
		description: 'Item not Found',
	},
	422: {
		description: 'Unprocessable entity, missing or invalid parameters',
	},
};

export const getLimit = (limit: number) =>
	limit >= 1 && limit < 1000 ? limit : 10;

export const throwError = (status: number) => {
	throw { status, message: responses[status] };
};

export const validateAtLeastOneParamExists = (...params: string[]) =>
	params.every(p => p === undefined) ? throwError(422) : true;

export const hitOrThrow = (result: any, statusCode: number = 404) =>
	result || throwError(statusCode);

export const controllerWrapper =
	(
		crudMethod: (
			req: Request,
		) => Promise<{ statusCode: number; content?: object | object[] }>,
	) =>
	async (req: Request, res: Response) => {
		try {
			const { statusCode, content } = await crudMethod(req);

			return res.status(statusCode).json(content);
		} catch (error) {
			return res.status(error.status ?? 500).json(error.message);
		}
	};
