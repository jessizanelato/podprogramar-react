import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './scenes/home/index';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                </div>
            </Router>
        );
    }
}

