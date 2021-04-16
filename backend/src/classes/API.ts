import express, { Express } from "express";
import { glob } from "glob";
import { Fyre } from "../Fyre";
import { APIResponse } from "../structures/ApiResponse";
import { APIMethod, APIRoute } from "../util/types/APIRoute";

export class API {
	
	private _express: Express = express();
	private _fyre: Fyre;
	
	constructor(fyre: Fyre) {
		this._fyre = fyre;
	}

	get express(): Express {
		return this._express;
	}
	
	declareRoutes(): Promise<void> {
		return new Promise((resolve, reject) => {
			glob(`${__dirname}/../routes/**/route.**(.ts|.js)`, (err, files) => {

				if (err) throw err;

				files.forEach(f => {
					const route: any = require(f).default;
					if (route instanceof Array) {
						route.forEach(r => {
							const meth: APIMethod = r.method;
							this._express[meth](`/${r.version}${r.route}`, r.execute);
						});
						return;
					}
					const method: APIMethod = route.method;


					this._express[method](`/${route.version}${route.route}`, route.execute);
				});

				return resolve();
			});
		})
	}

	start(port: number): Promise<Express> {
		return new Promise((resolve, reject) => {
			this.declareRoutes().then(() => {
				
				this._express.all('*', (req, res) => {
					const response = new APIResponse({
						message: "Unknwon route",
						statusCode: 404
					});

					res.status(response.status).json(response.compile());
				});

				this._express.listen(port, () => {
					console.log(`API listening on port:`, port);
				});

				return resolve(this._express);
			})
		})
	}
}