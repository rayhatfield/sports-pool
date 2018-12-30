import React from 'react';
import PropTypes from 'prop-types';

import App from 'app';
import {default as Login, AuthListener} from 'login';

import connect from './Store';

export default
@connect('user')
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
