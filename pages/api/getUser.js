import fs from 'fs';

export default (req, res) => {
	const files = fs.readdirSync(`${__dirname}/../../data/profiles`);
	res.status(200).json(files);
} 