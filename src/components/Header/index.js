import React, { Component } from 'react';
import Navbar from '../Navbar/index';
import logo from '../../img/logo-180-completa.png';

export default class Header extends Component {
    render() {
        var paginas = [{ url: '', descricao: 'Home' }, { url: 'episodios', descricao: 'Episodios' }, { url: 'blog', descricao: 'Blog' }, { url: 'cursos', descricao: 'Cursos' }, { url: 'sobre', descricao: 'Sobre' }];
        return (
            <header>
                <Navbar navPaginaAtiva={this.props.paginaAtiva} paginas={paginas} logo={logo} />
            </header>
        );
    }
}