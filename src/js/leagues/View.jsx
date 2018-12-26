import React from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';

import League from './League';

export default class LeagueView extends React.Component {

	render () {
		const {match} = this.props;

		return (
			<div className="league-view">
				(Leagues)
				<Link to={`${match.url}/123`}>123</Link>
				<Route path={`${match.path}/:id`} component={League} />
			</div>
		);
	}
}
