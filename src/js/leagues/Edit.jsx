import React from 'react';
import PropTypes from 'prop-types';

import Teams from './Teams';

export default class Edit extends React.Component {

	static propTypes = {
		id: PropTypes.string
	}

	state = {}

	render () {
		const {name} = this.state;

		return (
			<div className="league-edit">
				<input name="name" value={name} />
				<Teams />
			</div>
		);
	}
}
