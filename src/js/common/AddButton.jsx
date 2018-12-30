import React from 'react';
import cx from 'classnames';

export default function AddButton ({className, onClick, ...props}) {
	return onClick == null ? null : (
		<button className={cx('add-button', className)} onClick={onClick} {...props}>+</button>
	);
}
