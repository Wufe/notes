import * as React from 'react';
import {Component, PropTypes} from 'react';
import {InlineMath as IM} from 'react-katex';
import './style.scss';

class InlineMath extends Component{
    render(){
		let math = this.props.children;
		if( typeof math == 'object' )
			math = math.join( ' ' );
        return (
            <span className="inline-math-span">
                <IM math={this.props.math}>
                    {math}
                </IM>
            </span>
        );
    }
}

InlineMath.propTypes = {
	math: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string)
	])
}

export default InlineMath;
