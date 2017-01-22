import * as React from 'react';
import {Component, PropTypes} from 'react';

class THead extends Component{
    render(){
        return (
            <thead>
                <tr>
                    <td rowSpan={2}>Osservazioni</td>
                    <td colSpan={this.props.numberOfConstructors}>Costruttori di {this.props.mainSort}</td>
                </tr>
                <tr>
                    {this.props.children.map( ( c, i ) => {
                        return (
                            <td key={i}>
                                {c}
                            </td>
                        );
                    })}
                </tr>
            </thead>
        );
    }
}

THead.propTypes = {
    mainSort: PropTypes.string.isRequired,
    numberOfConstructors: PropTypes.number.isRequired
};

export default THead;
