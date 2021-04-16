import { TypedEmitter } from 'tiny-typed-emitter';
import { API } from './classes/API';
import { EVENT } from './util/constraints';
import { FyreEvents } from './util/types/Events';

export class Fyre extends TypedEmitter<FyreEvents> {

	private _apiPort: number = 7218;
	api: API = new API(this);

	constructor() {
		super();
	}

	start(): Promise<Fyre> {
		return new Promise((resolve, reject) => {
			this.api.start(this._apiPort).then((ex) => {
				this.emit(EVENT.READY, this);
				resolve(this);
			});
		});
	}

}