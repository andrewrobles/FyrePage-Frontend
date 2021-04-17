export function randStr(length: number): string {
	let res: Array<string> = [];
	let chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charsLength: number = chars.length;

	for (var i = 0; i < length; i++) {
		res.push(chars.charAt(Math.floor(Math.random() * charsLength)));
	}

	return res.join('');
}