import React from 'react';

import {AddButton, FieldContainer} from 'common';

import ScheduleSelect from './ScheduleSelect';

import './CreatePool.scss';

export default class CreatePool extends React.Component {

	state = {}

	showEdit = () => {
		this.setState({edit: true});
	}

	cancelEdit = () => {
		const clear = Object.keys(this.state).reduce((acc, k) => ({...acc, [k]: null}), {});
		this.setState({
			...clear,
			edit: false
		});
	}

	onSave = () => {
		const {name, schedule, ante} = this.state;
		console.log(name, schedule, ante);
	}

	onFieldChange = ({target: {name, value}}) => this.setState({[name]: value})

	onScheduleChange = schedule => this.setState({schedule})

	render () {
		const {edit, schedule, name, ante} = this.state;

		return (
			<div className="create-pool">
				{edit ? (
					<div className="create-pool-fields">
						<FieldContainer title="Pool Name">
							<input name="name" required value={name} onChange={this.onFieldChange} />
						</FieldContainer>
						<FieldContainer title="Choose a schedule">
							<ScheduleSelect onChange={this.onScheduleChange} value={schedule} />
						</FieldContainer>
						<FieldContainer title="Ante">
							<input type="number" name="ante" value={ante} onChange={this.onFieldChange} />
						</FieldContainer>
						<button className="secondary" onClick={this.cancelEdit}>Cancel</button>
						<button onClick={this.onSave}>Save</button>
					</div>
				) : (
					<AddButton onClick={this.showEdit} />
				)}
			</div>
		);
	}
}
