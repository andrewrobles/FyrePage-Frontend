import { Fyre } from "../Fyre";
import { EVENT } from "../util/constraints";
import { randStr } from "../util/randStr";
import { CsrfToken } from "../util/testCsrf";
import { RawSessionData, SessionData } from "../util/types/Session";

export class SessionController {

	private _fyre: Fyre;

	private _id: string;
	private _xCsrf: string;
	private _created: Date;
	private _lastUsed: Date;
	private _expires: Date;
	private _sessionData: SessionData;

	private _rawDat: RawSessionData;

	constructor(raw: RawSessionData, fyre: Fyre) {
		this._fyre = fyre;
		this._rawDat = raw;

		this._id = raw.session_id;
		this._created = new Date(raw.created);
		this._lastUsed = new Date(raw.last_used);
		this._expires = new Date(raw.expires);

		this._sessionData = JSON.parse(raw.data);

		this._xCsrf = raw.x_csrf;
	}

	get id(): string {
		return this._id;
	}

	get xCsrf(): string {
		return this._xCsrf;
	}

	get created(): Date {
		return this._created;
	}

	get lastUsed(): Date {
		return this._lastUsed;
	}

	get expires(): Date {
		return this._expires;
	}

	get sessionData(): SessionData {
		return this._sessionData;
	}

	set<K extends keyof SessionData>(key: K, value: SessionData[K]): Promise<SessionController> {
		return new Promise((resolve, reject) => {
			this._sessionData[key] = value;
			
			const raw = JSON.stringify(this._sessionData);

			this._fyre.db.query(`
				UPDATE sessions SET
				data='${raw}'
				WHERE session_id="${this._id}";
			`).then(res => {
				this._fyre.emit(EVENT.SESSION_DATA_UPDATED, this);
				return resolve(this);
			});
		});
	}

	validateCsrf(token: CsrfToken): boolean | null{
		if ((typeof token) !== 'string') return null;
		const check0 = (token == this._xCsrf);

		if (check0) { this.resetCsrf(); return true; } 
		else return false;
	}

	resetCsrf(): Promise<SessionController> {
		return new Promise((resolve, reject) => {
			const newCsrfToken = randStr(96);

			this._fyre.db.query(`
				UPDATE sessions SET
				x_csrf = '${newCsrfToken}'
				WHERE session_id='${this.id}';
			`).then((res) => {
				this._xCsrf = newCsrfToken;
				return resolve(this);
			}).catch((err) => reject('Could not reset CSRF token'));
		});
	}
}