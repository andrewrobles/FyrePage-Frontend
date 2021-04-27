import { Request, Response } from 'express';
import { APIResponse } from '../structures/ApiResponse';

export default [{
	route: "/signIn",
	version: "v1",
	method: "get",
	execute(req: Request, res: Response) {
		const response = new APIResponse();

		response.setStatus(418);
		response.setMessage("Profile info");
		response.setSuccessful();

		res.status(response.status).json(response.compile());
	}
}]