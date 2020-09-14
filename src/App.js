import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
        <Switch>
          <Route path="/checkout" />
          <Route path="/login" />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
