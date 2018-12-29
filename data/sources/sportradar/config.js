const fs = require('fs');

const apiKey = fs.readFileSync('./.api-key').toString().trim();

module.exports = {
	apiKey
};
