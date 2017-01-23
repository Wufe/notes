import * as React from 'react';
import {Component} from 'react';
import './style.scss';

export default class Declare extends Component{
    render(){
        return (
            <div>
                <span className="declare-header">Declare</span>
                {this.props.children}
            </div>
        );
    }
}
