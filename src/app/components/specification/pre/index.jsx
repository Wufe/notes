import * as React from 'react';
import {Component} from 'react';
import './style.scss';

export default class Pre extends Component{
    render(){
        return (
            <div className="pre-container">
                <span className="pre-header">Pre:</span>
                {this.props.children}
            </div>
        );
    }
}
