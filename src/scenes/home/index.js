import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Banner from './components/Banner/index';
import LastPosts from './components/LastPosts/index';
import Footer from '../../components/Footer/index';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header paginaAtiva='' />
                <main role="main">
                    <Banner />
                    <LastPosts />
                    <Footer />
                </main>
            </div>
        );
    }
}