const fs = require('fs');
const filter = require('./filter-data');
const fetchSchedule = require('./fetch-schedule');

async function update () {
	const schedule = await fetchSchedule();
	fs.writeFile('./tmp.json', JSON.stringify(schedule, null, '	'), () => {});
	const filtered = filter(schedule);
	fs.writeFile('./tmp-filtered.json', JSON.stringify(filtered, null, '	'), () => {});
	return filtered;
}

update();

module.exports = update;
