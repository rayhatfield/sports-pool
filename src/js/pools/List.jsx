import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {SemanticList as List} from 'common';

import * as api from './api';
import CreatePool from './CreatePool';

export default class PoolList extends React.Component {

	static propTypes = {
		match: PropTypes.object
	}

	state = {}

	componentDidMount () {
		this.setUp();
	}

	async setUp () {
		const pools = await api.getPools();
		this.setState({pools});
	}

	render () {
		const {
			// props: {
			// 	match: {path, url}
			// },
			state: {pools}
		} = this;

		return (
			<section className="pools-list-container">
				<header>
					<h1>Pools</h1>
				</header>
				<CreatePool />
				<List className="pools-list">
					{(pools || []).map(p => (
						<li key={p.id}>
							<Link to={p.id}>{p.name}</Link>
						</li>
					))}
				</List>
			</section>
		);
	}
}
