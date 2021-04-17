import { DatabaseConfig } from "../util/types/Database";
import mysql from 'mysql';

type DatabaseQuery = string;

export class Database {

	private _dbCfg: DatabaseConfig;

	constructor(credentials: DatabaseConfig) {
		this._dbCfg = credentials;
	}

	test(): Promise<any> {
		return new Promise((resolve, reject) => {
			let connection = mysql.createConnection(this._dbCfg);
			connection.connect((err) => {
				if (err) return reject(err);
				resolve(true);
				return connection.end();
			});
		})
	}

	query(query: DatabaseQuery): Promise<any> {
		return new Promise((resolve, reject) => {
			let connection = mysql.createConnection(this._dbCfg);
			connection.connect();
			connection.query(query, (err, res) => {
				if (err) return reject(err);
				resolve(res);
				return connection.end();
			});
		});
	}
}