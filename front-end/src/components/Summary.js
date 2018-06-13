import React, { Component } from 'react';
// Weather condition images
import atmosphere from "../weather-conditions/atmosphere.png";
import clear from "../weather-conditions/clear.png";
import clouds from "../weather-conditions/clouds.png";
import drizzle from "../weather-conditions/drizzle.png";
import rain from "../weather-conditions/rain.png";
import snow from "../weather-conditions/snow.png";
import thunder from "../weather-conditions/thunder.png";

// console.log("Summary is working.");

class Summary extends Component {
  constructor(){
    super();
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.handleWeatherTemperature = this.handleWeatherTemperature.bind(this);
}

  /* 
  The handleWeatherImage function shows the image of the current weather condition.
  I used https://openweathermap.org/weather-conditions to identify each range of numbers with
  the weather condition.
  */
  handleWeatherImage() {
    // console.log(this.props.weather.id);
    if (this.props.weather.id >= 200 && this.props.weather.id <= 232) {
      return <img className="summary-image" src={thunder} alt="Weather Condition" />
    }
    else if (this.props.weather.id >= 300 && this.props.weather.id <= 321) {
      return <img className="summary-image" src={drizzle} alt="Weather Condition" />
    }
    else if (this.props.weather.id >= 500 && this.props.weather.id <= 531) {
      return <img className="summary-image" src={rain} alt="Weather Condition" />
    }
    else if (this.props.weather.id >= 600 && this.props.weather.id <= 622) {
      return <img className="summary-image" src={snow} alt="Weather Condition" />
    }
    else if (this.props.weather.id >= 700 && this.props.weather.id <= 781) {
      return <img className="summary-image" src={atmosphere} alt="Weather Condition" />
    }
    else if (this.props.weather.id === 800) {
      return <img className="summary-image" src={clear} alt="Weather Condition" />    
    }
    else if (this.props.weather.id >= 801 && this.props.weather.id <= 804) {
      return <img className="summary-image" src={clouds} alt="Weather Condition" />    
    }
  }

  // This function prevent from display decimals.
  handleWeatherTemperature() {
    var temperature = this.props.main.temp;
    temperature = Math.round(temperature);

    return <h4>{temperature} <sup className="summary-units">°F</sup></h4>
  }

  render() {
    return (
      <div className="summary-container"> 
        <h2>{this.props.state.name}</h2>
        <h3>{this.props.weather.description}</h3>
        <div className="flex">
          <section className="row-column">{this.handleWeatherImage()}</section>
          <section className="row-column">{this.handleWeatherTemperature()}</section>
        </div>
      </div>
    );
  }
}

export default Summary;