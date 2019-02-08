import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App';
import Home from './home/home'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Link, Route } from 'react-router-dom'


ReactDOM.render(<App2/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
