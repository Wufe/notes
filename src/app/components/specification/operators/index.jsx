import * as React from 'react';
import {Component, PropTypes} from 'react';
import './style.scss';

class Operators extends Component{
    render(){
        return (
            <div className="operators-container">
                <h4>Operatori:</h4>
                {this.props.children}
            </div>
        );
    }
}

Operators.propTypes = {};

export default Operators;
