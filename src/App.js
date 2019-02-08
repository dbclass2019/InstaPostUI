import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

const App2 = () => (
  <BrowserRouter>
    <div>
      <nav><Link to="/home">Home</Link></nav>
      <Route path="/home" component={Home}/>

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

export default App2;
