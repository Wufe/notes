import * as React from 'react';
import {Component, PropTypes} from 'react';

class Algebraic extends Component{
    render(){
        return (
            <div>
                <h3>Specifica Algebrica</h3>
                {this.props.children}
            </div>
        );
    }
}

Algebraic.propTypes = {};

export default Algebraic;
