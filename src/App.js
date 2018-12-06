import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import NotFoundPage from './components/NotFoundPage'
import About from './components/About'
import Introduction from './components/Introduction'


class App extends Component {
  render() {
    return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/intro">Intro.</Link>
              </li>
            </ul>
          </nav>
          <hr></hr>
          <Switch>
            <Route path="/" exact component ={()=><h1>home page</h1>}></Route>
            <Route path="/about" component={About}/>
            <Route path="/intro" component={Introduction}></Route>
            <Route component = {NotFoundPage}/>
          </Switch>
        </div>
    );
  }
}

export default App;
