import React, { Component } from 'react';
import './style.css';

export default class ProgramaApoio extends Component {
    render() {
        return (
            <div className='container' id='programa-apoio'>
                <div className='row'>
                    <p className='text-center col mb-5'>
                        Estamos lançando oficialmente o Programa de Apoio ao PodProgramar. 
                        O nosso podcast vai continuar vivo, lindo e maravilhoso, porém queremos mais, nossa meta inicial é manter o PodProgramar no Spotify e para isso precisamos custear mais um serviço de hospedagem. 
                        E não é só isso, temos metas para melhorar nossos equipamentos, custear participação em eventos e trazer mais conteúdo pra vocês. 
                        Basta acessar <a href='https://app.picpay.com/user/podprogramar' target='_blank'>picpay.com/user/podprogramar</a>
                    </p>
                </div>
            </div>
        );
    }
}