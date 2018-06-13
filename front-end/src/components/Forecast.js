import React, { Component } from 'react';

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
    this.sunrise = this.sunrise.bind(this);
    this.sunset = this.sunset.bind(this);
  }

  componentWillMount() {
    this.getCity();
  }

  getCity() {
    var city = window.location.href.split("/").pop();
    // console.log(city);

    if (city !== undefined) {
      city = city.split('+').join(' ');
      
      if (city === this.props.state.first_city.name) {
        // console.log(city);
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
        // console.log(city);
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
        // console.log(city);
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
        // console.log(city);
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
        // console.log(city);
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

  sunrise() {

  }

  sunset() {

  }

  render() {
    return (
      <div className="forecast-container">
        <section className="five-day-forecast">
        
        </section>
        <section className="current-weather">
          <h5>Sunrise: <span className="forecast-data">{this.sunrise()}</span></h5>
          <h5>Sunset: <span className="forecast-data">{this.sunset()}</span></h5>
          <h5>Humidity: <span className="forecast-data">{this.state.main.humidity}%</span></h5>
          <h5>Pressure: <span className="forecast-data"></span></h5>
        </section>
      </div>
    );
  }
}

export default Forecast;