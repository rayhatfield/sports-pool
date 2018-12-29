#!/usr/bin/env node

const processGame = ({
	home: {name: home},
	away: {name: away},
	scheduled,
	scoring: {home_points: homePoints, away_points: awayPoints} = {}
}) => ({
	home,
	away,
	scheduled,
	...(homePoints ? {score: {home: homePoints, away: awayPoints}} : {})
});

const filters = {
	weeks: weeks => weeks.reduce((acc, {games}) => {
		acc.games = [...acc.games, ...games.map(processGame)];
		return acc;
	}, {games: []})
};

function filter (data) {
	const filtered = Object.entries(data).reduce((acc, [key, value]) => ({...acc, ...(filters[key] || (()=>({[key]: value})))(value)}), {});

	return {
		league: 'nfl',
		...filtered,
	};
}

module.exports = filter;

// fs.writeFile('../data/processed/nfl-2018-reg-filtered.json', JSON.stringify(result, null, '	'), error => error && console.log(error));
