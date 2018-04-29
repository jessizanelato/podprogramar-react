import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Banner from './components/Banner/index';
import LastPosts from './components/LastPosts/index';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header paginaAtiva='' />
                <Banner/>
                <LastPosts/>
            </div>
        );
    }
}