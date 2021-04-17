import { UserController } from "../controllers/UserController";
import { Fyre } from "../Fyre";
import { randStr } from "../util/randStr";
import { AuthUserData, CreateUserData } from "../util/types/UserTypes";

export class User {

	private _fyre: Fyre;

	constructor(fyre: Fyre) {
		this._fyre = fyre;
	}

	create(data: CreateUserData): Promise<UserController> {
		return new Promise((resolve, reject) => {
			const id: string = randStr(12);
		});
	}

	authenticate(data: AuthUserData): Promise<UserController> {
		return new Promise((resolve, reject) => {

		})
	}

	get(id: string) {}

}