import * as React from 'react';
import {Component, PropTypes} from 'react';

class Operators extends Component{
    render(){
        return (
            <div>
                <h4>Operatori:</h4>
                {this.props.children}
            </div>
        );
    }
}

Operators.propTypes = {};

export default Operators;
