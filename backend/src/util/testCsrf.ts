import { Fyre } from "../Fyre";

export type CsrfToken = string;
export type SessionID = string;

export function testCsrf(csrf: CsrfToken, session: SessionID, fyre: Fyre): Promise<void> {
	return new Promise((resolve, reject) => {
		fyre.sessions.get(session).then((session) => {
			const isValid = session.validateCsrf(csrf);

			if (isValid) return resolve();
			else return reject('Invalid Session Data');
		}).catch((err) => {
			reject('Could not get session.');
		});
	});
}