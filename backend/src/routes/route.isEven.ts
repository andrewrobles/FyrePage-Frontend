import { Request, Response } from 'express';
import { Fyre } from '../Fyre';
import { APIResponse } from '../structures/ApiResponse';

export default [{
	route: "/isEven/:val",
	version: "v1",
	method: "get",
	execute(req: Request, res: Response, fyre: Fyre) {
		const response = new APIResponse();

		console.log(req.query);

		response.setStatus(200);
		res.status(response.status).json(response.compile());
	}
}]