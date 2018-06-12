import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
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
      first_city_main: {},
      first_city_weather: {},
      second_city: {},
      second_city_main: {},
      second_city_weather: {},
      third_city: {},
      third_city_main: {},
      third_city_weather: {},
      fourth_city: {},
      fourth_city_main: {},
      fourth_city_weather: {},
      fifth_city: {},
      fifth_city_main: {},
      fifth_city_weather: {}
    }
  }

  componentDidMount() {
    var call = 'http://api.openweathermap.org/data/2.5/group?id=';
    var cityId = '5128581,498817,3451190,3675707,292223';
    var units = "&units=imperial";
    const apiKey = '&appid=c2a8f705fd5c4cdcab53ed003fbf3927';
    const url = call + cityId + units + apiKey;

    // Making one call to the openweathermap API, that get the object of five cities.
    axios.get(url)
      .then((res) => {
    console.log(res.data.list);

    this.setState({
      first_city: res.data.list[0],
      first_city_main: res.data.list[0].main,
      first_city_weather: res.data.list[0].weather[0],
      second_city: res.data.list[1],
      second_city_main: res.data.list[1].main,
      second_city_weather: res.data.list[1].weather[0],
      third_city: res.data.list[2],
      third_city_main: res.data.list[2].main,
      third_city_weather: res.data.list[2].weather[0],
      fourth_city: res.data.list[3],
      fourth_city_main: res.data.list[3].main,
      fourth_city_weather: res.data.list[3].weather[0],
      fifth_city: res.data.list[4],
      fifth_city_main: res.data.list[4].main,
      fifth_city_weather: res.data.list[4].weather[0]
      })
      // console.log(this.state.first_city);
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
          <Route startsWith path="/weather-forecast/" component={() =>
              (<Footer />) }/>
        </div>
      </Router>
    );
  }
}

export default App;
