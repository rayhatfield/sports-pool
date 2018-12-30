import {db} from '../firebase';

const actions = {
	loadSchedules: async (user, store) => {
		//TODO: handle errors
		const snap = await db.collection('schedules').get();
		const schedules = {};
		snap.forEach(async schedule => {
			//TODO: handle errors
			const games = await db.collection(`/schedules/${schedule.id}/games`)
				.get()
				.then(gsnap => gsnap.docs.map(game => game.data()));

			schedules[schedule.id] = {
				id: schedule.id,
				...schedule.data(),
				games
			};
		});
		store.set({schedules});
	}
};

export async function setUp (user, store) {
	try {
		store.set('loading', true);
		//TODO: handle errors
		await Promise.all(Object.values(actions)
			.map(action => action(user, store))
		);
	}
	catch (e) {
		console.error(e);
	}
	store.set('loading', false);
}

export function tearDown (prevUser, store) {
	// do whatever clean up on logout (flush user-specific data from store)
}
