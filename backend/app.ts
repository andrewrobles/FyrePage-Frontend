import { Fyre } from './src/Fyre';
const fyre = new Fyre();

fyre.start().then(() => {
	console.log('FyrePage Backend Started.');
})