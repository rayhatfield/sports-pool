import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import League from 'leagues';
import {LogOut} from 'login';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import './View.scss';

export default class App extends React.Component {

	render () {
		return (
			<Router>
				<div className="app-frame">
					<Header />
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/league" component={League} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}
