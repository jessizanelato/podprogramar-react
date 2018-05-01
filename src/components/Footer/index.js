import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p className="float-left">Desenvolvido por <a href="https://twitter.com/jessizanelato">@jessizanelato</a></p>
                <div className="float-right">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://facebook.com/podprogramart/"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/podprogramar/"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="https://podprogramar.com.br/feed/podcast/"><i className="fas fa-rss"></i></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}