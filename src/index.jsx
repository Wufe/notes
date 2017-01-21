import 'babel-polyfill';
import * as React from 'react';
import {Component} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {Root} from './app';

import {browserHistory} from 'react-router';

const appRoot = document.getElementById( 'app' );


const renderApp = () => {
	render(
		<Root />,
		appRoot
	);
};

renderApp();