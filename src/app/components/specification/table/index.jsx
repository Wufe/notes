import * as React from 'react';
import {Component} from 'react';

export default class Table extends Component{
    render(){
        return (
            <table>
                {this.props.children}
            </table>
        );
    }
}
