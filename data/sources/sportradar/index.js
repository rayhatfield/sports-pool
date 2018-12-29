const fs = require('fs');
const filter = require('./filter-data');
const fetchSchedule = require('./fetch-schedule');

async function update () {
	const schedule = await fetchSchedule();
	fs.writeFile('./cache/tmp.json', JSON.stringify(schedule, null, '	'), () => {});
	const filtered = filter(schedule);
	fs.writeFile('./cache/tmp-filtered.json', JSON.stringify(filtered, null, '	'), () => {});
	return filtered;
}

update();

module.exports = update;
