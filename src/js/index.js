import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import '../scss/main.scss';

import './firebase';
import View from './View';

ReactDOM.render(<View />, document.getElementById('app-root'));
