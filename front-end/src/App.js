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
  constructor(){
    super();
    this.state = {
      first_city: {},
      second_city: {},
      third_city: {},
      fourth_city: {},
      fifth_city: {}
    }
  }

  componentWillMount() {
    var call = 'http://api.openweathermap.org/data/2.5/group?id=';
    var cityId = '5128581,3451190,3675707,5601538,292223';
    var units = '&units=imperial';
    const apiKey = '&appid=c2a8f705fd5c4cdcab53ed003fbf3927';
    const url = call + cityId + units + apiKey;

    axios.get(url)
    .then((res) => {
    //console.log(res.data.list);
      for(var c = 0; c < 5; c += 1) {
        if (c === 0) {
          this.setState({
            first_city: res.data.list[c]
          })
        }
        else if (c === 1) {
          this.setState({
            second_city: res.data.list[c]
          })
        }
        else if (c === 2) {
          this.setState({
            third_city: res.data.list[c]
          })
        }
        else if (c === 3) {
          this.setState({
            fourth_city: res.data.list[c]
          })
        }
        else {
          this.setState({
            fifth_city: res.data.list[c]
          })
        }
      }
      console.log(this.state.first_city);
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
            <Route path="/weather-forecast/" component={() => 
              (<Home state={this.state} />) }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
