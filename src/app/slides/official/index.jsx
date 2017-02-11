import * as React from 'react';
import {Component} from 'react';
import {history} from '../..';

export default class Official extends Component{

    constructor( props ){
        super(props);
        this._onClick = this._onClick.bind( this );
    }

    _onClick( e ){
        /*const href = e.target.getAttribute( 'href' );
        e.preventDefault();
        history.push( href );*/
    }

    render(){
        return (
            <div>
                <h1>Ufficiali 2014-2015</h1>
                <ul>
                    <li>
                        <a href="resources/slides/2014-2015/introduction.pdf" target="_blank" onClick={this._onClick}>Introduzione</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/SW_quality.pdf" target="_blank" onClick={this._onClick}>Qualità del software e ciclo di sviluppo</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/programming_paradigms.pdf" target="_blank" onClick={this._onClick}>Paradigmi di programmazione</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/abstraction_design.pdf" target="_blank" onClick={this._onClick}>Astrazione nella progettazione</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/FundamentalAD.pdf" target="_blank" onClick={this._onClick}>Specifiche delle strutture dati astratte fondamentali</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/abstraction_programming.pdf" target="_blank" onClick={this._onClick}>Astrazione nella programmazione</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/paradigmaOO.pdf" target="_blank" onClick={this._onClick}>Paradigmi orientati agli oggetti</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/java.pdf" target="_blank" onClick={this._onClick}>Programmazione orientata agli oggetti in Java</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/comp-complexity.pdf" target="_blank" onClick={this._onClick}>Complessità computazionale degli algoritmi</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/comp-algorithms.pdf" target="_blank" onClick={this._onClick}>Complessità computazionale degli algoritmi fondamentali</a>
                    </li>
                    <li>
                        <a href="resources/slides/2014-2015/comp-problems.pdf" target="_blank" onClick={this._onClick}>Complessità computazionale dei problemi</a>
                    </li>
                </ul>
            </div>
        );
    }
}