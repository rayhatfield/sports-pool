import {db} from 'app';

export async function getPools () {
	const snap = await db.collection('pools').get();
	return snap.docs || [];
}
