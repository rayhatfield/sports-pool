import React from 'react';
import PropTypes from 'prop-types';

import App from 'app';
import Login from 'login';
import {AuthListener} from 'session';

import connect from './Store';

export default
@connect({
	user: 'user'
})
class View extends React.Component {
	static propTypes = {
		user: PropTypes.object
	}

	render () {
		const {props: {user}} = this;

		return (
			<>
				<AuthListener />
				{!user
					? <Login />
					: <App />
				}
			</>
		);
	}
}
