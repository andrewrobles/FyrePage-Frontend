export interface RawSessionData {
	id: number,
	session_id: string,
	x_csrf: string,
	created: string,
	last_used: string,
	expires: string,
	data: string,
}

export interface SessionData {
	loggedIn?: boolean,
	user?: string,	
}

export interface CreateSessionOptions {
	expires: number; // Number in seconds
}