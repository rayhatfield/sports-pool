import React from 'react';
import PropTypes from 'prop-types';

export default class League extends React.Component {

	render () {
		const {match: {params: {id}}} = this.props;

		return (
			<div className="league-view">league id: {id}</div>
		);
	}
}
