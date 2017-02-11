import * as React from 'react';
import {Component} from 'react';
import {history} from '../..';

export default class SlideIndex extends Component{

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
                <h1>Slides</h1>
                <ul>
                    <li>
                        <a href="/asd/slides/official" onClick={this._onClick}>Ufficiali 2014-2015</a>
                    </li>
                    <li>
                        <a href="/asd/slides/hidden" onClick={this._onClick}>Nascoste 2011-2012</a>
                    </li>
                    <li>
                        <a href="/asd/slides/lab" onClick={this._onClick}>Laboratorio</a>
                    </li>
                </ul>
            </div>
        );
    }

}