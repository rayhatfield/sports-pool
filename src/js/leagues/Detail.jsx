import React from 'react';
import PropTypes from 'prop-types';

export default class LeagueDetail extends React.Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	}

	render () {
		const {match: {params: {id}}} = this.props;

		return (
			<div className="league-view">league id: {id}</div>
		);
	}
}
