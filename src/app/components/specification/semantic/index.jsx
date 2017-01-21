import * as React from 'react';
import {Component, PropTypes} from 'react';

class Semantic extends Component{
    render(){
        return (
            <div>
                <h4>Semantica</h4>
                {this.props.children}
            </div>
        );
    }
}

Semantic.propTypes = {};

export default Semantic;
