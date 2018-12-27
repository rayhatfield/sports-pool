import React from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';

import League from './League';

export default class LeagueView extends React.Component {

	static propTypes = {
		match: PropTypes.shape({
			match: PropTypes.shape({
				url: PropTypes.string.isRequired,
				path: PropTypes.string.isRequired
			}).isRequired
		})
	}

	render () {
		const {match: {url, path}} = this.props;

		return (
			<div className="league-view">
				(Leagues)
				<Link to={`${url}/123`}>123</Link>
				<Route path={`${path}/:id`} component={League} />
			</div>
		);
	}
}
