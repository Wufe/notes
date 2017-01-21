import * as React from 'react';
import {Component} from 'react';
import {InlineMath as IM} from 'react-katex';
import './style.scss';

export default class InlineMath extends Component{
    render(){
        return (
            <span className="inline-math-span">
                <IM {...this.props}>
                    {this.props.children}
                </IM>
            </span>
        );
    }
}
