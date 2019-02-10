import React, { Component } from 'react';
import './App.css';
import Home from './home/home'
import Login from './login/login'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
        <div>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/" component={Login}/>
            </Switch>

        </div>
    </BrowserRouter>

//    <div>
//      <Link to="/">Home</Link>{' '}
//      <Link to={{pathname: '/about'}}>About</Link>{' '}
//      <Link to="/contact">Contact</Link>
//
//      <Switch>
//        <Route path="/" component={Home} />
//        <Route path="/about" component={ChatsDisplay} />
//        <Route
//          path="/contact"
//          render={() => <h1>Contact Us</h1>} />
//        <Route path="/blog" children={({match}) => (
//          <li className={match ? 'active' : ''}>
//            <Link to="/blog">Blog</Link>
//          </li>)} />
//        <Route render={() => <h1>Page not found</h1>} />
//      </Switch>
//    </div>
);

export default App;
