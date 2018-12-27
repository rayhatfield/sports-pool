import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import Create from './Create';
import Detail from './Detail';
import List from './List';

export default class PoolsView extends React.Component {

	static propTypes = {
		match: PropTypes.shape({
			url: PropTypes.string.isRequired
		}).isRequired
	}

	render () {
		const {match: {path}} = this.props;

		return (
			<Switch>
				<Route path={`${path}/new`} component={Create} />
				<Route path={`${path}/:id`} component={Detail} />
				<Route component={List} />
			</Switch>
		);
	}
}
