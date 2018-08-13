import React from 'react';
import Navbar from '../Navbar/index';

export default function Header(props) {
    const paginas = [{
        url: '',
        descricao: 'Home'
    }, {
        url: 'apoiadores',
        descricao: 'Seja um Apoiador'
    }, {
        url: 'blog',
        descricao: 'Blog'
    }, {
        url: 'cursos',
        descricao: 'Cursos'
    }, {
        url: 'sobre',
        descricao: 'Sobre'
    }, {
        url: 'contato',
        descricao: 'Contato'
    }];
        
    return (
        <header>
            <Navbar navPaginaAtiva={props.paginaAtiva} paginas={paginas} />
        </header>
    );
}