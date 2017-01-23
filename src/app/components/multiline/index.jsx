import * as React from 'react';
import {Component} from 'react';
import './style.scss';

export default class MultiLine extends Component{
    render(){
        return (
            <div className="multiline">
                {this.props.children}
            </div>
        );
    }
}
