import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
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
