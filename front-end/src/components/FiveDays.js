import React, { Component } from 'react';
import atmosphere from "../weather-conditions/atmosphere.png";
import clear from "../weather-conditions/clear.png";
import clouds from "../weather-conditions/clouds.png";
import drizzle from "../weather-conditions/drizzle.png";
import rain from "../weather-conditions/rain.png";
import snow from "../weather-conditions/snow.png";
import thunder from "../weather-conditions/thunder.png";

// console.log("FiveDays is working.");

class FiveDays extends Component {
  constructor(){
    super();
    this.changeToInteger = this.changeToInteger.bind(this);
    this.dateFormat = this.dateFormat.bind(this);
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.pressure = this.pressure.bind(this);
    this.wind = this.wind.bind(this);
  }

  changeToInteger(value) {
    var integer = Math.round(value);

    if(isNaN(integer) === false) {
      return (integer);
    }
  }

  dateFormat() {
    if (!this.props.state) {
      return "Tomorrow";
    }
    else if (this.props.state.dt_txt !== undefined) {
      var date = this.props.state.dt_txt.split(' ')[0]; 
      var dayOfWeek = new Date(date).getDay();      

      // console.log(this.props)

      // Show day of the week instead of YYYY-MM-DD format.
      return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
  }

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

  wind(value) {
    var wind = value;

    if(isNaN(wind) === false) {
      // Convert meters per second to miles per hour.
      wind = wind/2.23694;
      // Rounded to the nearest integer.
      wind = Math.round(wind);

      return wind;
    }
  }

  pressure(value) {
    var pressure = value;

    // Convert pressure from hPa to inHg.
    if(isNaN(pressure) === false) {
      pressure = pressure/33.863886666667;
      pressure = Math.round(pressure);

      return pressure;
    }
  }

  render() {
    return (
      <div className="five-days-container">
        <h5>{this.dateFormat()}</h5>
        <h3>{this.props.weather.description}</h3>
        <section className="five-days-weather-image">{this.handleWeatherImage(this.props.weather.id)}</section>
        <section className="five-data">
          <h4>{this.changeToInteger(this.props.main.temp)}<sup className="summary-units"> °F</sup></h4>
          <section className="five-data-continue">
            <h5>Min: <span className="forecast-data">{this.changeToInteger(this.props.main.temp_min)}<sup> °F</sup></span></h5>
            <h5>Max: <span className="forecast-data">{this.changeToInteger(this.props.main.temp_max)}<sup> °F</sup></span></h5>
            <h5>Wind: <span className="forecast-data">{this.wind(this.props.wind.speed)} <span className="data-type">mph</span></span></h5>
            <h5>Humidity: <span className="forecast-data">{this.props.main.humidity}<span className="data-type">%</span></span></h5>
            <h5>Pressure: <span className="forecast-data">{this.pressure(this.props.main.pressure)}<span className="data-type"> inHg</span></span></h5>
          </section>
        </section>
      </div> 
    );
  }
}

export default FiveDays;