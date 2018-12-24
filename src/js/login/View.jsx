import React from 'react';
import PropTypes from 'prop-types';

export default class LoginView extends React.Component {

	state = {}

	onFieldChange = ({target: {name, value}}) => {
		this.setState({
			[name]: value
		});
	}

	onSubmit = () => {
		console.log('on submit');
	}

	render () {
		const {email, password} = this.state;

		return (
			<form className="login-form">
				{['email', 'password'].map(field => (
					<input key={field}
						type={field}
						name={field}
						value={this.state[field]}
						onChange={this.onFieldChange} />
				))}
				<button onClick={this.onSubmit}>Let’s Go!</button>
			</form>
		);
	}
}
