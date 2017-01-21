import * as React from 'react';
import {Component} from 'react';
import {BlockMath as BM} from 'react-katex';

export default class BlockMath extends Component{
    render(){
        return (
            <BM>
                {this.props.children}
            </BM>
        );
    }
}
