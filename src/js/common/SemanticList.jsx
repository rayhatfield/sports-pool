import cx from 'classnames';

import './SemanticList.scss';

// we often want a list for purely semantic reasons, without the bullets and
// indentation. this way we don't have to repeat all the list resets every time
export default function SemanticList ({className, ...props}) {
	return (
		<ul className={cx('semantic-list', className)} {...props} />
	);
}
