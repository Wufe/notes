import * as React from 'react';
import {Component, PropTypes} from 'react';

class Spec extends Component{
    render(){
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                {this.props.children}
            </div>
        );
    }
}

Spec.propTypes = {
    name: PropTypes.string
};

export default Spec;
