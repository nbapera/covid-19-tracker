import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import './index.css';

import Header from './components/header/Header'
import Home from './pages/home/Home'
import State from './pages/state/State'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/:state" component={State} />
  </BrowserRouter>,
  document.getElementById('root')
);