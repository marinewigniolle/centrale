import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home"

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com/">Home</a>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
