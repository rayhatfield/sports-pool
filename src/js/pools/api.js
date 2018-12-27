import {db} from 'app';

export function getPools () {
	return db.collection('pools').get();
}
