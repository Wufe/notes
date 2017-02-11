import * as React from 'react';
import {Component, PropTypes} from 'react';
import {Nav} from 'office-ui-fabric-react';
import {connect} from 'react-redux';
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
        let asdLinks = [];
        for( let i = 0; i < this.props.asd.data_structures.length; i++ ){
            let structure = this.props.asd.data_structures[i];
            asdLinks.push({
                name: structure.name,
                key: '/asd/abstract-data-structures/' + structure.key,
                url: '/asd/abstract-data-structures/' + structure.key
            });
        }

        const navConfiguration = [{
            links: [{
                name: 'Home',
                url: '/',
                icon: 'Home',
                key: '/',
                links: [{
                    name: 'Algoritmi e Strutture Dati',
                    key: '/asd',
                    url: '/asd',
                    links: [{
                        name: 'Strutture dati',
                        key: '/asd/abstract-data-structures',
                        url: '/asd/abstract-data-structures',
                        links: asdLinks,
                        isExpanded: true
                    },
                    {
                        name: 'Slides',
                        key: '/asd/slides',
                        url: '/asd/slides',
                        links: [
                            {
                                name: 'Ufficiali 2014-2015',
                                key: '/asd/slides/official',
                                url: '/asd/slides/official'
                            },
                            {
                                name: 'Nascoste 2011-2012',
                                key: '/asd/slides/hidden',
                                url: '/asd/slides/hidden'
                            },
                            {
                                name: 'Laboratorio 2014-2015',
                                key: '/asd/slides/lab',
                                url: '/asd/slides/lab'
                            }
                        ],
                        isExpanded: true
                    }],
                    isExpanded: true
                }],
                isExpanded: true
            }],
            isExpanded: true
        }];

        return (
            <div className="navbar-container">
                <Nav
                    groups={navConfiguration}
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

const mapStateToProps = ( state, ownProps ) => {
    return {
        asd: state.asd
    };
};

export default connect(mapStateToProps, null)(Navbar);
