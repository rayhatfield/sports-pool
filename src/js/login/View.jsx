import React from 'react';
import EmailValidator from 'email-validator';

import {stopEvent as stop} from '../util';

import {createAccount, logIn} from './api';
import Page from './UnauthenticatedPage';

import './View.scss';

export default class LoginView extends React.Component {

	state = {}

	onFieldChange = ({target: {name, value}}) => {
		this.setState({
			[name]: value
		});
	}

	createAccount = async e => {
		stop(e);

		const {email, password} = this.state;
		try {
			await createAccount(email, password);
		}
		catch (error) {
			this.setState({error});
		}
	}

	signIn = async e => {
		stop(e);
		const {email, password} = this.state;

		try {
			await logIn(email, password);
		}
		catch (error) {
			this.setState({error});
		}
	}

	render () {
		const {email, password, error} = this.state;
		const canSubmit = email && password && EmailValidator.validate(email);

		return (
			<Page>
				<form className="login-form" onSubmit={this.signIn}>
					{error && <div>Error</div>}
					{['email', 'password'].map(field => (
						<input key={field}
							type={field}
							name={field}
							value={this.state[field]}
							onChange={this.onFieldChange} />
					))}
					<button disabled={!canSubmit} onClick={this.signIn}>Sign In</button>
					<button disabled={!canSubmit} onClick={this.createAccount}>Create Account</button>
				</form>
			</Page>
		);
	}
}
