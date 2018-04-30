import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><img src={this.props.logo} height="80" alt="Logo PodProgramar" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse f-right" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        {this.props.paginas.map((pagina, i) => {
                            return (<li className="nav-item" key={i}>
                                <Link className={pagina.url === this.props.navPaginaAtiva ? 'nav-link active' : 'nav-link'} to={'/'+pagina.url}>{pagina.descricao}</Link>
                            </li>);
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}