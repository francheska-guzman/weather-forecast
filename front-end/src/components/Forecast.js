import React, { Component } from 'react';
import CurrentCity from './CurrentCity';
import FiveDays from './FiveDays';

// console.log("Forecast is working.");

class Forecast extends Component {
  constructor(){
    super();
    this.state = {
      city: [],
      clouds: [],
      coord: [],
      main: [],
      sys: [],
      weather: [],
      wind: []
    }
    this.getCity = this.getCity.bind(this);
    this.pressure = this.pressure.bind(this);
    this.sunrise = this.sunrise.bind(this);
    this.sunset = this.sunset.bind(this);
    this.visibility = this.visibility.bind(this);
  }

  componentDidMount() {
    this.getCity();
  }

  getCity() {
    var city = window.location.href.split("/").pop();

    if (city !== undefined) {
      city = city.split('+').join(' ');
      // console.log(city);
      
      if (city === this.props.state.first_city.name) {
        this.setState({
          city: this.props.state.first_city,
          clouds: this.props.state.first_city_clouds,
          coord:this.props.state.first_city_coord,
          main: this.props.state.first_city_main,
          sys: this.props.state.first_city_sys,
          weather: this.props.state.first_city_weather,
          wind: this.props.state.first_city_wind
        })
      }
      else if (city === this.props.state.second_city.name) {
        this.setState({
          city: this.props.state.second_city,
          clouds: this.props.state.second_city_clouds,
          coord:this.props.state.second_city_coord,
          main: this.props.state.second_city_main,
          sys: this.props.state.second_city_sys,
          weather: this.props.state.second_city_weather,
          wind: this.props.state.second_city_wind
        })
      }
      else if (city === this.props.state.third_city.name) {
        this.setState({
          city: this.props.state.third_city,
          clouds: this.props.state.third_city_clouds,
          coord:this.props.state.third_city_coord,
          main: this.props.state.third_city_main,
          sys: this.props.state.third_city_sys,
          weather: this.props.state.third_city_weather,
          wind: this.props.state.third_city_wind
        })
      }
      else if (city === this.props.state.fourth_city.name) {
        this.setState({
          city: this.props.state.fourth_city,
          clouds: this.props.state.fourth_city_clouds,
          coord:this.props.state.fourth_city_coord,
          main: this.props.state.fourth_city_main,
          sys: this.props.state.fourth_city_sys,
          weather: this.props.state.fourth_city_weather,
          wind: this.props.state.fourth_city_wind
        })
      }
      else {
        this.setState({
          city: this.props.state.fifth_city,
          clouds: this.props.state.fifth_city_clouds,
          coord:this.props.state.fifth_city_coord,
          main: this.props.state.fifth_city_main,
          sys: this.props.state.fifth_city_sys,
          weather: this.props.state.fifth_city_weather,
          wind: this.props.state.fifth_city_wind
        })
      }
    }
  }

  pressure() {
    var pressure = this.state.main.pressure;

    // Convert pressure from hPa to inHg.
    if(isNaN(pressure) === false) {
      pressure = pressure/33.863886666667;
      pressure = Math.round(pressure);

      return pressure;
    }
  }

  sunrise() {
    var seconds = this.state.sys.sunrise;
    var date = new Date(seconds * 1000);
    var time = date.toLocaleTimeString();
    
    return time;
  }

  sunset() {
    var seconds = this.state.sys.sunset;
    var date = new Date(seconds * 1000);
    var time = date.toLocaleTimeString();
    
    return time;
  }

  wind() {
    var wind = this.state.wind.speed;

    if(isNaN(wind) === false) {
      // Convert meters per second to miles per hour.
      wind = wind/2.23694;
      // Rounded to the nearest integer.
      wind = Math.round(wind);

      return wind;
    }
  }

  visibility() {
    var visibility = this.state.city.visibility;

    if(isNaN(visibility) === false) {
      visibility = visibility * 0.0006213712;
      visibility = Math.round(visibility);

      return visibility;
    }
  }

  render() {
    return (
      <div className="forecast-container">
        <section className="five-day-forecast">
          <FiveDays day_1={this.state} />
          <FiveDays day_2={this.state} />
          <FiveDays day_3={this.state} />
          <FiveDays day_4={this.state} />
          <FiveDays day_5={this.state} />
        </section>
          <CurrentCity 
            state={this.state} 
          />
        <div className="current-weather">
          <section className="column-row">
            <h5>Sunrise: <span className="forecast-data">{this.sunrise()} <span className="data-type">GMT -4000</span></span></h5>
            <h5>Visibility: <span className="forecast-data">{this.visibility()} <span className="data-type">mi</span></span></h5>
            <h5>Wind: <span className="forecast-data">{this.wind()} <span className="data-type">mph</span></span></h5>
          </section>
          <section className="column-row">
            <h5>Sunset: <span className="forecast-data">{this.sunset()} <span className="data-type">GMT -4000</span></span></h5>
            <h5>Humidity: <span className="forecast-data">{this.state.main.humidity}<span className="data-type">%</span></span></h5>
            <h5>Pressure: <span className="forecast-data">{this.pressure()}<span className="data-type"> inHg</span></span></h5>
          </section>
        </div>
      </div>
    );
  }
}

export default Forecast;