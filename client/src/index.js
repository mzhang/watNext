import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AuthContext from './AuthContext'

import axios from 'axios';
axios.defaults.withCredentials = true;

ReactDOM.render(<AuthContext><App /></AuthContext>, document.getElementById('root'));