const firebase = require('firebase/app');
const admin = require('firebase-admin');
const sportradar = require('./sources/sportradar');

const serviceAccount = require('./gservice-private-key.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

// firebase.firebase().settings({
//     timestampsInSnapshots: true
// });

async function go () {
	const db = admin.firestore();
	const {games} = await sportradar();
	const collection = await db.collection('/schedules/nfl-2018-reg/games');
	const dateStr = x => (/\d{4}-\d{2}-\d{2}/).exec(x)[0];
	const teamStr = x => /\w+$/.exec(x)[0]; // last word should be team name
	games.map(async g => {
		const {home, away, scheduled} = g;
		const id = `${dateStr(scheduled)}-${teamStr(home)}-v-${teamStr(away)}`.toLowerCase();
		collection.doc(id).set(g);
	});
}

go();
