import * as React from 'react';
import {Component} from 'react';

export default class Observation extends Component{
    render(){
        return (
            <tr>
                {this.props.children.map( ( c, i ) => {
                    return (
                        <td key={i}>
                            {c}
                        </td>
                    );
                })}
            </tr>
        );
    }
}
