import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './scenes/home/index';
import Apoiadores from './scenes/apoiadores/index';

import './App.css';

export default class App extends React.Component {
render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/apoiadores" component={Apoiadores}></Route>
                </div>
            </Router>
        );
    }
}