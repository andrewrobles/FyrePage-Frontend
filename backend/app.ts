import { API } from './src/classes/API';

const api = new API();

api.start(7218).then(() => {
	console.log('API Started');
})