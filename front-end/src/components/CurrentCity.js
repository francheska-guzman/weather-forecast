import React, { Component } from 'react';
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
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
    this.changeToInteger = this.changeToInteger.bind(this);
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

export default CurrentCity;