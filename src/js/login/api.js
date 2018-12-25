import firebase from 'firebase';

export function createAccount (email, password) {
	return firebase.auth()
		.createUserWithEmailAndPassword(email, password);
}
