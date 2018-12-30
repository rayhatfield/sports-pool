import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import connect from '../Store';

export default
@connect(['schedules'])
class ScheduleSelect extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		value: PropTypes.any,
		onChange: PropTypes.func,
		schedules: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string,
				name: PropTypes.string
			})
		)
	}

	onChange = ({target: {value}}) => {
		const {onChange} = this.props;
		if (onChange) {
			onChange(value);
		}
	}

	render () {
		const {className, value, schedules} = this.props;

		return (
			<select className={cx('schedule-select', className)}
				value={value}
				onChange={this.onChange}
			>
				{!value && <option selected></option>}
				{
					Object.values(schedules || {})
						.map(({id, name}) => (
							<option value={id} key={id} selected={id === value}>{name}</option>
						))
				}
			</select>
		);
	}
}
