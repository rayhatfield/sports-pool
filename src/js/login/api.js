import firebase from 'firebase';

export function createAccount (email, password) {
	return firebase.auth()
		.createUserWithEmailAndPassword(email, password);
}

export function logIn (email, password) {
	return firebase.auth()
		.signInWithEmailAndPassword(email, password);
}

export function logOut () {
	return firebase.auth().signOut();
}
