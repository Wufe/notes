import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {history} from '../..';

class AbstractDataStructures extends Component{

    constructor( props ){
        super(props);
        this._onClick = this._onClick.bind( this );
    }

    _onClick( e ){
        const href = e.target.getAttribute( 'href' );
        e.preventDefault();
        history.push( href );
    }

    render(){
        let structureList = [];
        for( let i = 0; i < this.props.asd.data_structures.length; i++ ){
            const structure = this.props.asd.data_structures[i];
            const url = "/asd/abstract-data-structures/" + structure.key;
            structureList.push(
                <li key={i}>
                    <a onClick={this._onClick} href={url}>{structure.name}</a>
                </li>
            );
        }
        return (
            <div>
                <h2>Abstract Data Structures</h2>
                <ul>
                    {structureList}
                </ul>

            </div>
        );
    }

}

const mapStateToProps = ( state ) => {
    return {
        asd: state.asd
    }
};

export default connect(mapStateToProps)(AbstractDataStructures);