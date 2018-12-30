import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './FieldContainer.scss';

export default class FieldContainer extends React.PureComponent {

	static propTypes = {
		title: PropTypes.string,
		className: PropTypes.string,
		children: PropTypes.any
	}

	render () {
		const {title, className, children} = this.props;

		return (
			<div className={cx('field-container', className)}>
				{title && (
					<div className="field-container-title">{title}</div>
				)}
				{children}
			</div>
		);
	}
}
