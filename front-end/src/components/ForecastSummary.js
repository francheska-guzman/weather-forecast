import React, { Component } from 'react';
import '../weather-icons/weather-icons.min.css';

class ForecastSummary extends Component {
  constructor(){
    super();
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.changeToInteger = this.changeToInteger.bind(this);
    this.pressure = this.pressure.bind(this);
    this.sunriseSunset = this.sunriseSunset.bind(this);
    this.wind = this.wind.bind(this);
    this.visibility = this.visibility.bind(this);
}

  handleWeatherImage(id) {
    // console.log(id);
    if (id >= 200 && id <= 232) { return <i className="wi wi-thunderstorm"></i> }
    else if (id >= 300 && id <= 321) { return <i className="wi wi-sleet"></i> }
    else if (id >= 500 && id <= 531) { return <i className="wi wi-showers"></i> }
    else if (id >= 600 && id <= 622) { return <i className="wi wi-snow"></i> }
    else if (id >= 700 && id <= 781) { return <i className="wi wi-fog"></i> }
    else if (id === 800) { return <i className="wi wi-day-cloudy"></i> }
    else if (id >= 801 && id <= 804) { return <i className="wi wi-cloudy"></i> }
  }

  changeToInteger(value) {
    var integer = Math.round(value);

    if(isNaN(integer) === false) {
      return (integer);
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

  sunriseSunset(value) {
    var seconds = value;
    var date = new Date(seconds * 1000);
    var time = date.toLocaleTimeString();
    
    return time;
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

  visibility(value) {
    var visibility = value;

    if(isNaN(visibility) === false) {
      visibility = visibility * 0.0006213712;
      visibility = Math.round(visibility);

      return visibility;
    }
  }

  render() {
    return (
      <div className="forecast-summary-wrapper">
        <div className="current-city"> 
          <h5>Today&#39;s weather in</h5>
          <h2>{this.props.state.day_1_city.name}</h2>
          <h3>{this.props.state.day_1_weather.description}</h3>
          <div className="flex">
            <section className="column-row">{this.handleWeatherImage(this.props.state.day_1_weather.id)}</section>
            <section className="column-row">
              <h4>{this.changeToInteger(this.props.state.day_1_main.temp)}<sup className="summary-units"> °F</sup></h4>
              <h6>Min: {this.changeToInteger(this.props.state.day_1_main.temp_min)}<sup> °F</sup></h6>
              <h6>Max: {this.changeToInteger(this.props.state.day_1_main.temp_max)}<sup> °F</sup></h6>
            </section>
          </div>
        </div>
        <div className="current-weather">
            <section className="column-row">
              <h5>Sunrise: <span className="forecast-data">{this.sunriseSunset(this.props.state.day_1_sys.sunrise)} <span className="data-type">GMT -0400</span></span></h5>
              <h5>Visibility: <span className="forecast-data">{this.visibility(this.props.state.day_1_city.visibility)} <span className="data-type">mi</span></span></h5>
              <h5>Wind: <span className="forecast-data">{this.wind(this.props.state.day_1_wind.speed)} <span className="data-type">mph</span></span></h5>
            </section>
            <section className="column-row">
              <h5>Sunset: <span className="forecast-data">{this.sunriseSunset(this.props.state.day_1_sys.sunset)} <span className="data-type">GMT -0400</span></span></h5>
              <h5>Humidity: <span className="forecast-data">{this.props.state.day_1_main.humidity}<span className="data-type">%</span></span></h5>
              <h5>Pressure: <span className="forecast-data">{this.pressure(this.props.state.day_1_main.pressure)}<span className="data-type"> inHg</span></span></h5>
            </section>
        </div>
      </div>
    );
  }
}

export default ForecastSummary;