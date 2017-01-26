import * as React from 'react';
import {Component, PropTypes} from 'react';

class Spec extends Component{
    render(){
        const outline = this.props.file ?
            <div>
                Traccia: <a target="_blank" href={"resources/documents/" + this.props.file}>{this.props.file}</a>
            </div> : null
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                {outline}
                {this.props.children}
            </div>
        );
    }
}

Spec.propTypes = {
    name: PropTypes.string,
    file: PropTypes.string
};

export default Spec;
