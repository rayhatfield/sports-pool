import React from 'react';
import PropTypes from 'prop-types';

import {LogOut} from 'login';

import './Footer.scss';

export default function Footer () {
	return (
		<footer className="app-main-footer">
			<LogOut />
		</footer>
	);
}
