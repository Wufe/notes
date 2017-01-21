import * as React from 'react';
import {Component, PropTypes} from 'react';
import {SearchBox} from 'office-ui-fabric-react';
import {Navbar} from '..';
import './style.scss';

class Structure extends Component{

	render(){
		return (
			<div className="structure">
				<div className="header">
					<div className="searchbox-container">
						<SearchBox />
					</div>
				</div>
				<Navbar
					selectedKey={this.props.location.pathname}/>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}

}

Structure.propTypes = {
	currentLocation: PropTypes.string
};

export default Structure;
