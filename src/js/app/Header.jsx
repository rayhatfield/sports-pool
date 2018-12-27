import React from 'react';

import Nav from './Nav';
import './Header.scss';

export default class Header extends React.Component {

	render () {
		return (
			<header className="app-main-header">
				<Nav className="app-main-nav" />
			</header>
		);
	}
}
