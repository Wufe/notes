import * as React from 'react';
import {Component} from 'react';

class Function extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Function;
