import React, { Component } from 'react';
import './style.css';

export default class Planos extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card-deck mb-5 text-center'>
                    <div className='card box-shadow'>
                        <div className='card-header'>git pull</div>
                        <div className='card-body'>
                            <h1 class="card-title pricing-card-title">R$ 3 <small class="text-muted">/ mês</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Só quero ajudar a converter cafeína em código</li>
                            </ul>
                        </div>
                    </div>
                    <div className='card box-shadow'>
                        <div className='card-header'>git commit -m</div>
                        <div className='card-body'>
                            <h1 class="card-title pricing-card-title">R$ 5 <small class="text-muted">/ mês</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>Quero aparecer na lista de apoiadores</li>
                            </ul>
                        </div>
                    </div>
                    <div className='card box-shadow'>
                        <div className='card-header'>git push</div>
                        <div className='card-body'>
                            <h1 class="card-title pricing-card-title">R$ 12 <small class="text-muted">/ mês</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Anteriores +</li>
                                <li>Quero receber newsletter semanal com notícias e novidades da nossa área</li>
                            </ul>
                        </div>
                    </div>
                    <div className='card box-shadow'>
                        <div className='card-header'>git merge</div>
                        <div className='card-body'>
                            <h1 class="card-title pricing-card-title">R$ 20 <small class="text-muted">/ mês</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Anteriores +</li>
                                <li>Quero participar de sorteios mensais de brindes (canecas, cursos, livros, entre outros)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}