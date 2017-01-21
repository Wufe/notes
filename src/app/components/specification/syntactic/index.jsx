import * as React from 'react';
import {Component, PropTypes} from 'react';

class Syntactic extends Component{
    render(){
        return (
            <div>
                <h4>Sintattica</h4>
                {this.props.children}
            </div>
        );
    }
}

Syntactic.propTypes = {};

export default Syntactic;
