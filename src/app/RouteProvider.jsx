import * as React from 'react';
import * as ReactRouter from 'react-router';
import {IndexRoute, Route, Router} from 'react-router';
import {dispatch, history} from '.';
import {Structure} from './components';
import {AbstractDataStructures, Home} from './pages';
import {Tree, Trie} from './data-structures';

class RouteProvider{
	getRoutes(){
		return (
			<Router history={history}>
				<Route path='/' component={Structure}>
					<IndexRoute component={Home} />
					<Route path='asd'>
						<Route path='abstract-data-structures'>
							<IndexRoute component={AbstractDataStructures} />
							<Route path='tree' component={Tree} />
							<Route path='trie' component={Trie} />
						</Route>
					</Route>
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
