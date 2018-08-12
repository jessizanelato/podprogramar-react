import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><i className="fas fa-female"></i> PodProgramar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse f-right" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    {props.paginas.map((pagina, i) => {
                        return (<li className="nav-item" key={i}>
                            <Link className={pagina.url === props.navPaginaAtiva ? 'nav-link active' : 'nav-link'} to={'/'+pagina.url}>{pagina.descricao}</Link>
                        </li>);
                    })}
                </ul>
            </div>
        </nav>
    );
}