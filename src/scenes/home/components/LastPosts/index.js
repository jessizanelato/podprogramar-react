import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class LastPosts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    getPostImage(id) {
        const url = 'https://podprogramar.com.br/wp-json/wp/v2/media/'+id;
        return axios.get(url)
            .then((response) => {
                return response;
            }).catch((error) => {
                console.log(error);
            }); 
    }

    componentDidMount() {
        axios.get('https://podprogramar.com.br/wp-json/wp/v2/posts?per_page=12&categories=2')
            .then((response) => {
                const posts = response.data;
                const promises = posts.map((post, i) => {
                    return this.getPostImage(post.featured_media).then((res) => {
                        return {'item': post, 'imagem_principal': res.data};
                    });
                });
                return Promise.all(promises);
            }).then((posts) => {
                this.setState({ posts: posts });
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row">
            {this.state.posts.map((post, i) => {
                console.log(post);
                return (<div className = "col-md-4">
                    <div className="card mb-4 box-shadow" id={i}>
                        <img className="card-img-top" src={post.imagem_principal.guid.rendered} />
                        <div className="card-body">
                            <p className="card-text" dangerouslySetInnerHTML={{ __html: post.item.title.rendered }}></p>
                        </div>
                    </div>
                </div>);
            })}
            </div>
        );
    }
}