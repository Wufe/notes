import * as React from 'react';
import {Component, PropTypes} from 'react';
import './style.scss';

class Operator extends Component{
    render(){
        return (
            <span className="operator-container">
                <span>{this.props.children}</span>
            </span>
        );
    }
}

Operator.propTypes = {};

export default Operator;
