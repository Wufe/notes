import * as React from 'react';
import {Component, PropTypes} from 'react';
import './style.scss';

class Semantic extends Component{
    render(){
        return (
            <div className="semantic-container">
                <h4>Semantica</h4>
                {this.props.children}
            </div>
        );
    }
}

Semantic.propTypes = {};

export default Semantic;
