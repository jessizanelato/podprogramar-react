import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import ProgramaApoio from './components/ProgramaApoio/index';
import Planos from './components/Planos/index';
import ApoiadoresList from './components/ApoiadoresList/index';

export default class Apoiadores extends Component {
    render() {
        return (
            <div>
                <Header paginaAtiva='apoiadores' />
                <main role="main">
                    <ProgramaApoio />
                    <Planos />
                    <ApoiadoresList />
                    <Footer />
                </main>
            </div>
        );
    }
}