import { Request, Response } from 'express';
import { Fyre } from '../../Fyre';
import { APIResponse } from '../../structures/ApiResponse';

export default [{
	route: "/session/new",
	version: "v1",
	method: "get",
	execute(req: Request, res: Response, fyre: Fyre) {
		const response = new APIResponse();

		fyre.sessions.create().then((newSession) => {
			response.setData({
				id: newSession.id
			});
			response.setSuccessful();
			response.setMessage('Session ID created successfully.')

			res.status(response.status).json(response.compile());
		}).catch((error) => {
			response.setMessage(error.toString());
			response.setStatus(400)

			res.status(response.status).json(response.compile());
		})

	}
}]