import { SessionController } from "../controllers/SessionController";
import { Fyre } from "../Fyre";
import { randStr } from "../util/randStr";
import { CreateSessionOptions } from "../util/types/Session";

export class Session {

	private _fyre: Fyre;

	constructor(fyre: Fyre) {
		this._fyre = fyre;
	}

	purge(): Promise<void> {
		return new Promise((resolve, reject) => {

		});
	}
	
	create(options?: CreateSessionOptions): Promise<SessionController> {
		return new Promise((resolve, reject) => {
			const sessionID = randStr(128);
			const x_csrf = randStr(96);

			const expires = (options?.expires ? options.expires : (86400 * 10));

			this._fyre.db.query(`
				INSERT INTO sessions (session_id, x_csrf, created, last_used, expires, data)
				VALUES ('${sessionID}', '${x_csrf}', NOW(), NOW(), '${expires}', '{}');
			`).then(async (res) => {
				return resolve(await this.get(sessionID));
			}).catch(reject);

		});
	}

	get(id: any): Promise<SessionController> {
		return new Promise((resolve, reject) => {
			
			this._fyre.db.query(`SELECT * FROM sessions WHERE session_id='${id}'`).then((res) => {
				if (res.length == 0) return reject(new Error('Unknwon session'));
				else resolve(new SessionController(res[0], this._fyre));
			});
		});
	}

}