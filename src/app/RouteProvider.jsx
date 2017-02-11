import * as React from 'react';
import * as ReactRouter from 'react-router';
import {IndexRoute, Route, Router} from 'react-router';
import {dispatch, history} from '.';
import {Structure} from './components';
import {AbstractDataStructures, Home, SlideIndex} from './pages';
import {Library, PriorityQueue, Tree, Trie} from './data-structures';
import {Official, Hidden, Lab} from './slides';

class RouteProvider{
	getRoutes(){
		return (
			<Router history={history}>
				<Route path='/' component={Structure}>
					<IndexRoute component={Home} />
					<Route path='asd'>
						<Route path='abstract-data-structures'>
							<IndexRoute component={AbstractDataStructures} />
							<Route path='library' component={Library} />
							<Route path='tree' component={Tree} />
							<Route path='trie' component={Trie} />
							<Route path='priority-queue' component={PriorityQueue} />
						</Route>
						<Route path='slides'>
							<IndexRoute component={SlideIndex} />
							<Route path='official' component={Official} />
							<Route path='hidden' component={Hidden} />
							<Route path='lab' component={Lab} />
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
