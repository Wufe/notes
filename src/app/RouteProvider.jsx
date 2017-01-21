import * as React from 'react';
import * as ReactRouter from 'react-router';
import {IndexRoute, Route, Router} from 'react-router';
import {dispatch, history} from '.';
import {Structure} from './components';
import {Index} from './pages';

class RouteProvider{

	getRoutes(){
		return (
			<Router history={history}>
				<Route path='/' component={Structure}>
					<IndexRoute component={Index} />
				</Route>
			</Router>
		);
	}

}

const routeProvider = new RouteProvider;
const routes = routeProvider.getRoutes();

export {
	RouteProvider,
	routes
};
