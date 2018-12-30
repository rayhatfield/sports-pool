const fs = require('fs');

const apiKey = fs.readFileSync(require.resolve('./.api-key')).toString().trim();

module.exports = {
	apiKey
};
