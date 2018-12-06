import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
