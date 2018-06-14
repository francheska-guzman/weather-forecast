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
    this.dateFormat = this.dateFormat.bind(this);
    this.handleWeatherImage = this.handleWeatherImage.bind(this);
  }

  dateFormat() {
    if (!this.props.state) {
      return "Tomorrow";
    }
    else if (this.props.state.dt_txt !== undefined) {
      var date = this.props.state.dt_txt.split(' ')[0]; 
      var dayOfWeek = new Date(date).getDay();      

      console.log(this.props)

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

  render() {
    return (
      <div className="five-days-container">
        <h5>{this.dateFormat()}</h5>
        <section className="five-days-weather-image">{this.handleWeatherImage(this.props.weather.id)}</section>
      </div> 
    );
  }
}

export default FiveDays;