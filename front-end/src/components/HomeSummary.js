import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../weather-icons/weather-icons.min.css';

// console.log("HomeSummary is working.");

class HomeSummary extends Component {
  constructor(){
    super();
    this.handleParams = this.handleParams.bind(this);
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.handleWeatherTemperature = this.handleWeatherTemperature.bind(this);
}

  // Change spaces to a + sign to avoid url show %20.
  handleParams() {
    var city = this.props.name;
    
    if (city !== undefined) {
      city = city.replace(/ /g, '+');
      return city;
    }
  }

  /* I used https://openweathermap.org/weather-conditions to identify 
  each range of id with the weather condition. */
  handleWeatherImage(id) {
    // console.log(id);
    if (id >= 200 && id <= 232) { return <i class="wi wi-thunderstorm"></i> }
    else if (id >= 300 && id <= 321) { return <i class="wi wi-sleet"></i> }
    else if (id >= 500 && id <= 531) { return <i class="wi wi-showers"></i> }
    else if (id >= 600 && id <= 622) { return <i class="wi wi-snow"></i> }
    else if (id >= 700 && id <= 781) { return <i class="wi wi-fog"></i> }
    else if (id === 800) { return <i class="wi wi-cloudy"></i> }
    else if (id >= 801 && id <= 804) { return <i class="wi wi-day-cloudy"></i> }
  }

  handleWeatherTemperature(value) {
    var temperature = Math.round(value);

    if(isNaN(temperature) === false) {
      return <h4>{temperature} <sup className="summary-units">°F</sup></h4>
    }
  }

  render() {
    return (
      <Link className="summary-link" to={`/weather-forecast/${this.handleParams()}`}>
        <div className="summary-container"> 
          <h2>{this.props.name}</h2>
          <h3>{this.props.weather}</h3>
          <div className="flex">
            <section className="row-column weather-icon">{this.handleWeatherImage(this.props.id)}</section>
            <section className="row-column">{this.handleWeatherTemperature(this.props.temp)}</section>
          </div>
        </div>
      </Link>
    );
  }
}

export default HomeSummary;