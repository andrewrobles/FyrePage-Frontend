export type APIMethod = "get" | "post" | "put" | "delete";

export interface APIRoute {
	route: string,
	version: string,
	method: APIMethod,
	execute: (req: Request, res: Response) => void,
}