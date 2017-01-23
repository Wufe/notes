import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Tab} from '..';

class Line extends Component{
    render(){
        return (
            <div className="line">
                <Tab depth={this.props.depth} />{this.props.children}
            </div>
        );
    }
}

Line.defaultProps = {
    depth: 0
};

Line.propTypes = {
    depth: PropTypes.number
};

export default Line;
