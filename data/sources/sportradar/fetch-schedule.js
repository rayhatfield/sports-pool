const https = require('https');

const {apiKey} = require('./config.js');

function get (url) {
	return new Promise((resolve, reject) => {
		https.get(url, res => {
			const { statusCode } = res;
			const contentType = res.headers['content-type'];

			let error;
			if (statusCode !== 200) {
				error = new Error('Request Failed.\n' +
					`Status Code: ${statusCode}`
				);
			} else if (!/^application\/json/.test(contentType)) {
				error = new Error('Invalid content-type.\n' +
					`Expected application/json but received ${contentType}`
				);
			}

			if (error) {
				// consume response data to free up memory
				res.resume();
				reject(error);
				return;
			}

			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => { rawData += chunk; });
			res.on('end', () => {
				try {
					const parsedData = JSON.parse(rawData);
					resolve(parsedData);
					return;
				} catch (e) {
					reject(e);
					return;
				}
			});
		}).on('error', (e) => {
			reject(e);
			return;
		});
	});
}

async function getSchedule (league = 'nfl', year = new Date().getFullYear()) {
	// http://api.sportradar.us/nfl/official/trial/v5/en/games/2018/REG/schedule.json?api_key=ghtwvg7bbqbdu8ngfar3rgfw
	const url = `https://api.sportradar.us/${league}/official/trial/v5/en/games/${year}/REG/schedule.json?api_key=${apiKey}`;
	try {
		const data = await get(url);
		return data;
	}
	catch (e) {
		console.error(e);
		return e;
	}
}

module.exports = getSchedule;
