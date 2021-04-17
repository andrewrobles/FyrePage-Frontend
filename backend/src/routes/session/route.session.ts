import { Request, Response } from 'express';
import { Fyre } from '../../Fyre';
import { APIResponse } from '../../structures/ApiResponse';

export default [{
	route: "/session",
	version: "v1",
	method: "get",
	execute(req: Request, res: Response, fyre: Fyre) {
		const response = new APIResponse();

		fyre.sessions.get(req.query.id).then((session) => {
			response.setData({ 
				id: session.id,
				created: session.created,
				lastUsed: session.lastUsed,
				expres: session.expires,
			});
			response.setSuccessful();

			res.status(response.status).json(response.compile());
		}).catch(() => {
			response.setStatus(404)
					.setMessage(`Session doesn't exist.`);

			res.status(response.status).json(response.compile());	
		})
	}
}]