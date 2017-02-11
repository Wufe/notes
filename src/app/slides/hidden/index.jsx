import * as React from 'react';
import {Component} from 'react';

export default class Hidden extends Component{
    render(){
        return (
            <div>
                <h1>Nascoste (2011-2012)</h1>
                <ul>
                    <li>
                        <a href="resources/slides/2011-2012/dizionario.pdf" target="_blank">Dizionario</a>
                    </li>
                    <li>
                        <a href="resources/slides/2011-2012/graph.pdf" target="_blank">Grafo</a>
                    </li>
                    <li>
                        <a href="resources/slides/2011-2012/list.pdf" target="_blank">Lista</a>
                    </li>
                    <li>
                        <a href="resources/slides/2011-2012/stack-queue.pdf" target="_blank">Pila - Coda</a>
                    </li>
                    <li>
                        <a href="resources/slides/2011-2012/tree.pdf" target="_blank">Albero</a>
                    </li>
                </ul>
            </div>
        );
    }
}