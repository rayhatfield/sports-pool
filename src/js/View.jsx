import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import {Loading} from 'common';
import App from './App';
import Login from 'login';
import connect from './Store';

export default
@connect({
	user: 'user'
})
class View extends React.Component {

	state = {}

	componentDidMount () {
		const {store} = this.props;

		firebase.auth().onAuthStateChanged(user => {
			store.set({user})
		})
		this.setState({ready: true});
	}

	render () {
		const {props: {user}, state: {ready}} = this;

		return (
			!ready
			? <Loading />
			: !user
				? <Login />
				: <App />
		);
	}
}
