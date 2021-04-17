import { API } from './classes/API';
import { EVENT } from './util/constraints';
import { FyreEvents } from './util/types/Events';
import { TypedEmitter } from 'tiny-typed-emitter';

import cfg from '../config';
import { Database } from './classes/Database';
import { Session } from './classes/Session';

export class Fyre extends TypedEmitter<FyreEvents> {

	private _apiPort: number = 7218;
	db: Database = new Database(cfg.db);
	cfg=cfg;
	api: API = new API(this);
	sessions: Session = new Session(this)

	constructor() {
		super();
	}

	start(): Promise<Fyre> {
		return new Promise((resolve, reject) => {
			this.api.start(this._apiPort).then((ex) => {
				this.db.test().then(() => {
					console.log('Databse connected!');

					this.emit(EVENT.READY, this);
					resolve(this);
				}).catch(reject);
			});
		});
	}

}