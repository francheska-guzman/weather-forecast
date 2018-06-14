import React, { Component } from 'react';
import '../weather-icons/weather-icons.min.css';

class ForecastSummary extends Component {
  constructor(){
    super();
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.changeToInteger = this.changeToInteger.bind(this);
}

handleWeatherImage(id) {
  // console.log(id);
  if (id >= 200 && id <= 232) { return <i className="wi wi-thunderstorm"></i> }
  else if (id >= 300 && id <= 321) { return <i className="wi wi-sleet"></i> }
  else if (id >= 500 && id <= 531) { return <i className="wi wi-showers"></i> }
  else if (id >= 600 && id <= 622) { return <i className="wi wi-snow"></i> }
  else if (id >= 700 && id <= 781) { return <i className="wi wi-fog"></i> }
  else if (id === 800) { return <i className="wi wi-cloudy"></i> }
  else if (id >= 801 && id <= 804) { return <i className="wi wi-day-cloudy"></i> }
}

  changeToInteger(value) {
    var integer = Math.round(value);

    if(isNaN(integer) === false) {
      return (integer);
    }
  }

  render() {
    return (
      <div className="current-city"> 
        <h5>Today's weather in</h5>
        <h2>{this.props.state.city.name}</h2>
        <h3>{this.props.state.weather.description}</h3>
        <div className="flex">
          <section className="column-row">{this.handleWeatherImage(this.props.state.weather.id)}</section>
          <section className="column-row">
            <h4>{this.changeToInteger(this.props.state.main.temp)}<sup className="summary-units"> °F</sup></h4>
            <h6>Min: {this.changeToInteger(this.props.state.main.temp_min)}<sup> °F</sup></h6>
            <h6>Max: {this.changeToInteger(this.props.state.main.temp_max)}<sup> °F</sup></h6>
          </section>
        </div>
      </div>
    );
  }
}

export default ForecastSummary;