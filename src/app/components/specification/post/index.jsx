import * as React from 'react';
import {Component} from 'react';
import './style.scss';

export default class Post extends Component{
    render(){
        return (
            <div className="post-container">
                <span className="post-header">Post:</span>
                {this.props.children}
            </div>
        );
    }
}
