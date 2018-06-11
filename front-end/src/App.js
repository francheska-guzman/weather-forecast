import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';
import axios from 'axios';

console.log("App is working.");

class App extends Component {

  componentWillMount() {
    var call = 'http://api.openweathermap.org/data/2.5/group?id=';
    var citiesId = '5128581,3451190,3675707,5601538,292223';
    var units = '&units=imperial';
    const apiKey = '&appid=c2a8f705fd5c4cdcab53ed003fbf3927';
    const url = call + citiesId + units + apiKey;

    axios.get(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
   }

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
