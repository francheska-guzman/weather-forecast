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
      wind: [],
      day_1: [],
      day_2: [],
      day_3: [],
      day_4: [],
      day_5: []
    }
    this.pressure = this.pressure.bind(this);
    this.sunriseSunset = this.sunriseSunset.bind(this);
    this.wind = this.wind.bind(this);
    this.visibility = this.visibility.bind(this);
  }

  // Grab the selected city through the params.
  componentWillMount() {
    var city = window.location.href.split("/").pop();
    // console.log(city); 
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
        };
      }
    // console.log(this.state);
  }

  componentDidMount() {
    // console.log(this.state);
    var days = [];

    if (this.state.city.id !== undefined) {
      var api = 'http://api.openweathermap.org/data/2.5/forecast';
      var cityId = "?id=" + this.state.city.id;
      var system = "&units=imperial";
      /*
      My two API keys in case of any issue are: 
      c2a8f705fd5c4cdcab53ed003fbf3927
      9fd9021ddf72d859fb5818cd4beee4f9
      */
      const key = '&appid=9fd9021ddf72d859fb5818cd4beee4f9';
      const url = api + cityId + system + key;

      fetch(url)
        .then((res) => {
        return res.json();
      }).then(data => {
        // console.log(data);
        for(var i = 0; i < data.list.length; i += 1) {
          // console.log(data.list[i].dt_txt.split(' ')[1]);
          if(data.list[i].dt_txt.split(' ')[1] === "12:00:00") {
            days.push(data.list[i]);
            // console.log(days);
          }
        }
        this.setState({
          day_1: days[0],
          day_2: days[1],
          day_3: days[2],
          day_4: days[3],
          day_5: days[4],
        });
      // console.log(this.state.day_1);
      }).catch((error) => {
      console.log(error);
      })
    };
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

  sunriseSunset(value) {
    var seconds = value;
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
          <FiveDays state = {this.state.day_1} />
          <FiveDays state = {this.state.day_2} />
          <FiveDays state = {this.state.day_3} />
          <FiveDays state = {this.state.day_4} />
          <FiveDays state = {this.state.day_5} />
        </section>
          <CurrentCity state={this.state} />
        <div className="current-weather">
          <section className="column-row">
            <h5>Sunrise: <span className="forecast-data">{this.sunriseSunset(this.state.sys.sunrise)} <span className="data-type">GMT -0400</span></span></h5>
            <h5>Visibility: <span className="forecast-data">{this.visibility()} <span className="data-type">mi</span></span></h5>
            <h5>Wind: <span className="forecast-data">{this.wind()} <span className="data-type">mph</span></span></h5>
          </section>
          <section className="column-row">
            <h5>Sunset: <span className="forecast-data">{this.sunriseSunset(this.state.sys.sunset)} <span className="data-type">GMT -0400</span></span></h5>
            <h5>Humidity: <span className="forecast-data">{this.state.main.humidity}<span className="data-type">%</span></span></h5>
            <h5>Pressure: <span className="forecast-data">{this.pressure()}<span className="data-type"> inHg</span></span></h5>
          </section>
        </div>
      </div>
    );
  }
}

export default Forecast;