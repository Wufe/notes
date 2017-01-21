import * as React from 'react';
import {Component, PropTypes} from 'react';

class Axiomatic extends Component{
    render(){
        return (
            <div>
                <h3>Specifica Assiomatica</h3>
                {this.props.children}
            </div>
        );
    }
}

Axiomatic.propTypes = {};

export default Axiomatic;
