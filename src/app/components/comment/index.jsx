import * as React from 'react';
import {Component} from 'react';
import './style.scss';

export default class Comment extends Component{
    render(){
        return (
            <div className="comment-container">
                {this.props.children}
            </div>
        );
    }
}
