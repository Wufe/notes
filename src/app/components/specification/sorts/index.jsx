import * as React from 'react';
import {Component, PropTypes} from 'react';

class Sorts extends Component{
    render(){
        return (
            <div>
                <h4>Tipi:</h4>
                {this.props.children}
            </div>
        );
    }
}

Sorts.propTypes = {};

export default Sorts;
