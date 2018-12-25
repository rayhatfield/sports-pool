import React from 'react';
import PropTypes from 'prop-types';
import EmailValidator from 'email-validator';

import {createAccount} from './api';

export default class LoginView extends React.Component {

	state = {}

	onFieldChange = ({target: {name, value}}) => {
		this.setState({
			[name]: value
		});
	}

	createAccount = async e => {
		e.stopPropagation();
		e.preventDefault();
		console.log('create account');

		const {email, password} = this.state;
		try {
			const user = await createAccount(email, password);
			console.log(user);
		}
		catch (e) {
			console.error(e);
		}
	}

	signIn = e => {
		e.stopPropagation();
		e.preventDefault();
		console.log('log in');
	}

	render () {
		const {email, password} = this.state;
		const canSubmit = email && password && EmailValidator.validate(email);

		return (
			<form className="login-form" onSubmit={this.onSubmit}>
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
		);
	}
}
