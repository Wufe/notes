import * as React from 'react';
import {Component, PropTypes} from 'react';
import './style.scss';

class Tab extends Component{
    render(){
        const tabs = [];
        for( let i = 0; i < this.props.depth; i++ ){
            tabs.push(
                <span key={i} className="tab-span"></span>
            );
        }
        return (
            <span>
                {tabs}
            </span>
        );
    }
}

Tab.defaultProps = {
    depth: 1
}

Tab.propTypes = {
    depth: PropTypes.number
}

export default Tab;
