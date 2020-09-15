import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login" />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
