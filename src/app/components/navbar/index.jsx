import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Nav} from 'office-ui-fabric-react';
import {history} from '../..';

import './style.scss';

class Navbar extends Component{

    constructor( props ){
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick( e, i ){
        const href = i.url;
        if( href ){
            e.preventDefault();
            history.push( href );
        }
    }

    render(){
        return (
            <div className="navbar-container">
                <Nav
                    groups={
                        [
                            {
                                links: [
                                    {
                                        name: 'Home',
                                        url: '/',
                                        icon: 'Home',
                                        key: '/',
                                        links: [
                                            {
                                                name: 'Algoritmi e Strutture Dati',
                                                key: '/asd',
                                                url: '/asd',
                                                links: [
                                                    {
                                                        name: 'Strutture dati',
                                                        key: '/asd/abstract-data-structures',
                                                        url: '/asd/abstract-data-structures',
                                                        links: [
                                                            {
                                                                name: 'Biblioteca',
                                                                key: '/asd/abstract-data-structures/library',
                                                                url: '/asd/abstract-data-structures/library'
                                                            },
                                                            {
                                                                name: 'Coda con priorità',
                                                                key: '/asd/abstract-data-structures/priority-queue',
                                                                url: '/asd/abstract-data-structures/priority-queue'
                                                            },
                                                            {
                                                                name: 'Trie',
                                                                key: '/asd/abstract-data-structures/trie',
                                                                url: '/asd/abstract-data-structures/trie'
                                                            },
                                                        ], isExpanded: true
                                                    }
                                                ], isExpanded: true
                                            }
                                        ], isExpanded: true
                                    }
                                ]
                            }
                        ]
                    }
                    selectedKey={this.props.selectedKey}
                    onLinkClick={this._onClick}
                    />
            </div>
        );
    }
}

Navbar.propTypes = {
    selectedKey: PropTypes.string
};

Navbar.defaultProps = {
    selectedKey: ''
};

export default Navbar;
