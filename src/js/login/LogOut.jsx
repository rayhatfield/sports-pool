import React from 'react';

import {logOut} from './api';

export default class LogOut extends React.Component {
	render () {
		return (
			<button onClick={logOut}>Log Out</button>
		);
	}
}
