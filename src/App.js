import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import NotFoundPage from './components/NotFoundPage'
import About from './components/About'
import User from './components/User'


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
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <hr></hr>
          <Switch>
            <Route path="/" exact component ={()=><h1>home page</h1>}></Route>
            <Route path="/about" component={About}/>
            <Route path="/user/:userid" component = {({match}) =>{
              return <h1>Hello user : {match.params.userid} </h1>}}/>
            <Route path="/user" component={User}></Route>
            <Route component = {NotFoundPage}/>
          </Switch>
        </div>
    );
  }
}

export default App;
