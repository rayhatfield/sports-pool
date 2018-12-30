import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import League from 'leagues';
import Pool from 'pools';

import connect from '../Store';

import NotFound from './NotFound';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import './View.scss';

export default
@connect('loading')
class App extends React.Component {

	static propTypes = {
		loading: PropTypes.bool
	}

	render () {
		const {loading} = this.props;
		return loading
			? <div>loading</div>
			: (
				<Router>
					<div className="app-frame">
						<Header />
						<main>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/league" component={League} />
								<Route path="/pool" component={Pool} />
								<Route component={NotFound} />
							</Switch>
						</main>
						<Footer />
					</div>
				</Router>
			);
	}
}
