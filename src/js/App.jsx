import React from 'react';
import PropTypes from 'prop-types';

import {LogOut} from 'login';

export default class App extends React.Component {

	render () {
		return (
			<div>App <LogOut /></div>
		);
	}
}
