import * as React from 'react';
import {Component} from 'react';
import './style.scss';

export default class Table extends Component{
    render(){
        return (
            <table className="algebraic-table">
                {this.props.children}
            </table>
        );
    }
}
