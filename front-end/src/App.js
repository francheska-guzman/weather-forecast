import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';

console.log("App is working.");

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route path="/weather-forecast/" component={() => (<Home />) }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
