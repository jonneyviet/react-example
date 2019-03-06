import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';

var {Provider} = require('react-redux');
var store =require('store');

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
		 	<App/>
		</BrowserRouter>
 	</Provider>
 , document.getElementById('app'));

module.hot.accept();