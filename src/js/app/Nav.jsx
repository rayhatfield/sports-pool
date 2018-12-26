import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';

import {SemanticList} from 'common';

import './Nav.scss';

export default class Nav extends React.Component {

	static propTypes = {
		className: PropTypes.string
	}

	render () {
		const {className} = this.props;

		return (
			<SemanticList className={className}>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/league">Leagues</NavLink></li>
				<li><NavLink to="/pool">Pools</NavLink></li>
			</SemanticList>
		);
	}
}
