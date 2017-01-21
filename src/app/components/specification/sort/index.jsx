import * as React from 'react';
import {Component, PropTypes} from 'react';
import './style.scss';

class Sort extends Component{
    render(){
        return (
            <span className="sort-container">
                <span className="sort-name">{this.props.name}:</span>
                <span>{this.props.description}{this.props.children}</span>
            </span>
        );
    }
}

Sort.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};

export default Sort;
