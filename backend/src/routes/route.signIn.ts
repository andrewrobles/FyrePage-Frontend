import { Request, Response } from 'express';
import { APIResponse } from '../structures/ApiResponse';

export default [{
	route: "/signIn",
	version: "v1",
	method: "post",
	execute(req: Request, res: Response) {
		const response = new APIResponse();

		response.setStatus(418);
		response.setMessage(req.body["name"]);
		response.setSuccessful();

		res.status(response.status).json(response.compile());
	}
}]