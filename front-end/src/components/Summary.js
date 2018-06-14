import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    if (id >= 200 && id <= 232) {
      return <img className="summary-image" src={thunder} alt="Weather Condition" />
    }
    else if (id >= 300 && id <= 321) {
      return <img className="summary-image" src={drizzle} alt="Weather Condition" />
    }
    else if (id >= 500 && id <= 531) {
      return <img className="summary-image" src={rain} alt="Weather Condition" />
    }
    else if (id >= 600 && id <= 622) {
      return <img className="summary-image" src={snow} alt="Weather Condition" />
    }
    else if (id >= 700 && id <= 781) {
      return <img className="summary-image" src={atmosphere} alt="Weather Condition" />
    }
    else if (id === 800) {
      return <img className="summary-image" src={clear} alt="Weather Condition" />    
    }
    else if (id >= 801 && id <= 804) {
      return <img className="summary-image" src={clouds} alt="Weather Condition" />    
    }
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
            <section className="row-column">{this.handleWeatherImage(this.props.id)}</section>
            <section className="row-column">{this.handleWeatherTemperature(this.props.temp)}</section>
          </div>
        </div>
      </Link>
    );
  }
}

export default Summary;