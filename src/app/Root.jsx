import * as React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';
import {store, routes} from '.';

class Root extends Component{
	render(){
		return (
			<Provider store={store} children={routes}></Provider>
		);
	}
}

export {Root};