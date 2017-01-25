import * as React from 'react';
import {Component} from 'react';
import {history} from '../..';

export default class AbstractDataStructures extends Component{

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
        return (
            <div>
                <h2>Abstract Data Structures</h2>
                <ul>
                    <li>
                        <a onClick={this._onClick} href="/#/asd/abstract-data-structures/tree">Albero</a>
                    </li>
                    <li>
                        <a onClick={this._onClick} href="/#/asd/abstract-data-structures/trie">Trie</a>
                    </li>
                </ul>

            </div>
        );
    }

}
