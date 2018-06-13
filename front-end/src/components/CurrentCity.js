import React, { Component } from 'react';
// Weather condition images
import atmosphere from "../weather-conditions/atmosphere.png";
import clear from "../weather-conditions/clear.png";
import clouds from "../weather-conditions/clouds.png";
import drizzle from "../weather-conditions/drizzle.png";
import rain from "../weather-conditions/rain.png";
import snow from "../weather-conditions/snow.png";
import thunder from "../weather-conditions/thunder.png";

// console.log("CurrentCity is working.");

class CurrentCity extends Component {
  constructor(){
    super();
    this.handleParams = this.handleParams.bind(this);
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.handleWeatherTemperature = this.handleWeatherTemperature.bind(this);
}

  handleParams() {
    var city = this.props.name;
    
    if (city !== undefined) {
      city = city.replace(/ /g, '+');
      return city;
    }
  }

  /* 
  Render an image of the current weather condition. I used https://openweathermap.org/weather-conditions 
  to identify each range of numbers with the weather condition.
  */
  handleWeatherImage() {
    // console.log(this.props.weather.id);
    if (this.props.state.weather.id >= 200 && this.props.state.weather.id <= 232) {
      return <img className="summary-image" src={thunder} alt="Weather Condition" />
    }
    else if (this.props.state.weather.id >= 300 && this.props.state.weather.id <= 321) {
      return <img className="summary-image" src={drizzle} alt="Weather Condition" />
    }
    else if (this.props.state.weather.id >= 500 && this.props.state.weather.id <= 531) {
      return <img className="summary-image" src={rain} alt="Weather Condition" />
    }
    else if (this.props.state.weather.id >= 600 && this.props.state.weather.id <= 622) {
      return <img className="summary-image" src={snow} alt="Weather Condition" />
    }
    else if (this.props.state.weather.id >= 700 && this.props.state.weather.id <= 781) {
      return <img className="summary-image" src={atmosphere} alt="Weather Condition" />
    }
    else if (this.props.state.weather.id === 800) {
      return <img className="summary-image" src={clear} alt="Weather Condition" />    
    }
    else if (this.props.state.weather.id >= 801 && this.props.state.weather.id <= 804) {
      return <img className="summary-image" src={clouds} alt="Weather Condition" />    
    }
  }

  // This function prevent from display decimals.
  handleWeatherTemperature(temperature) {
    temperature = Math.round(temperature);

    if(isNaN(temperature) === false) {
      return (temperature)
    }
  }

  render() {
    return (
      <div className="current-city"> 
        <h2>{this.props.state.city.name}</h2>
        <h3>{this.props.state.weather.description}</h3>
        <div className="flex">
          <section className="column-row">{this.handleWeatherImage()}</section>
          <section className="column-row">
            <h4>{this.handleWeatherTemperature(this.props.state.main.temp)}<sup className="summary-units"> °F</sup></h4>
            <h6>Min: {this.handleWeatherTemperature(this.props.state.main.temp_min)}<sup> °F</sup></h6>
            <h6>Max: {this.handleWeatherTemperature(this.props.state.main.temp_max)}<sup> °F</sup></h6>
        </section>
        </div>
      </div>
    );
  }
}

export default CurrentCity;