import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCgmk8UNwHDbkHvAMIKBxgQ_-cVLn7KsPc',
	authDomain: 'sports-pool.firebaseapp.com',
	databaseURL: 'https://sports-pool.firebaseio.com',
	projectId: 'sports-pool',
	storageBucket: 'sports-pool.appspot.com',
	messagingSenderId: '376093927929'
};

const firebaseApp = firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
	timestampsInSnapshots: true
});

export default firebaseApp;
export {db};
