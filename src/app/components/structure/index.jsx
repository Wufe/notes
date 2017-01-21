import * as React from 'react';
import {Component} from 'react';
import {Navbar} from '..';
import './style.scss';

export default class Structure extends Component{

	render(){
		return (
			<div>
				<Navbar
					selectedKey="home"/>
			</div>
		);
	}

}
