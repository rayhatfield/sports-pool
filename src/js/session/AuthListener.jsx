import React from 'react';
import PropTypes from 'prop-types';

import firebase from '../firebase';
import connect from '../Store';

import {setUp, tearDown} from './actions';

export default
@connect('user')
class AuthListener extends React.Component {

	static propTypes = {
		store: PropTypes.object,
		user: PropTypes.object
	}

	constructor (props) {
		super(props);
		const {store} = this.props;

		firebase.auth().onAuthStateChanged(user => {
			store.set({user});
		});
	}

	componentDidUpdate ({user: prevUser}) {
		const {user, store} = this.props;
		if (user && user !== prevUser) {
			setUp(user, store);
		}
		if (prevUser && !user) {
			tearDown(prevUser, store);
		}
	}

	render () {
		return null;
	}
}
