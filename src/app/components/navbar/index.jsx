import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Nav} from 'office-ui-fabric-react';

import './style.scss';

class Navbar extends Component{

    render(){
        return (
            <div className="navbar-container">
                <Nav
                    groups={
                        [
                            {
                                links: [
                                    {
                                        name: 'Home',
                                        url: '/',
                                        icon: 'Home',
                                        key: 'home'
                                    }
                                ]
                            }
                        ]
                    }
                    selectedKey={this.props.selectedKey}
                    />
            </div>
        );
    }
}

Navbar.propTypes = {
    selectedKey: PropTypes.string
};

Navbar.defaultProps = {
    selectedKey: ''
};

export default Navbar;
