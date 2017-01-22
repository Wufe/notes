import * as React from 'react';
import {Component} from 'react';

export default class TBody extends Component{
    render(){
        return (
            <tbody>
                {this.props.children}
            </tbody>
        );
    }
}
