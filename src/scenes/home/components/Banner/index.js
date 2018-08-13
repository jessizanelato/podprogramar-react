import React from 'react';
import axios from 'axios';
import './style.css';

export default class Banner extends React.Component {
    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://podprogramar.com.br/wp-json/wp/v2/posts?per_page=2&categories=2')
            .then(res => {
                let posts = res.data;
                this.setState({ posts: posts });
            })
    }

    render() {
        return (
            <div id="banner" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.state.posts.map((post, i) => {
                    return(<li data-target="#banner" data-slide-to={i} className={i === 0 ? "active" : ""}></li>);
                    })}
                </ol>
                <div className="carousel-inner">
                    {this.state.posts.map((post, i) => {
                        return (<div className={i === 0 ? "carousel-item active" : "carousel-item"} id={i}>
                        <img className="img-fluid" src={post.custom_fields.imagem_banner} alt='' />
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h2 className="text-lg-right" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                                <p className="resumo-post text-justify" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                <p className="botao"><a className="btn btn-outline-light" href={post.link} role="button"><i className="fas fa-headphones"></i> Ouça agora</a></p>
                            </div>
                        </div>
                    </div>);
                    })}
                </div>
                <a className="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}