import React, { Component } from 'react';
import ForecastSummary from './ForecastSummary';
import ForecastNextDays from './ForecastNextDays';

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
      day_1_clouds: [], 
      day_1_main: [],
      day_1_weather: [],
      day_1_wind: [],
      day_2: [],
      day_2_clouds: [], 
      day_2_main: [],
      day_2_weather: [],
      day_2_wind: [],
      day_3: [],
      day_3_clouds: [], 
      day_3_main: [],
      day_3_weather: [],
      day_3_wind: [],
      day_4: [],
      day_4_clouds: [], 
      day_4_main: [],
      day_4_weather: [],
      day_4_wind: []
    }
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
        }
      }
    // console.log(this.state);
  }

  componentDidMount() {
    // console.log(this.state);
    var days = [];

    if (this.state.city.id !== undefined) {
      var api = 'https://api.openweathermap.org/data/2.5/forecast';
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
          if(data.list[i].dt_txt.split(' ')[1] === "00:00:00") {
            days.push(data.list[i]);
            // console.log(days);
          }
        }
        // Saving the next four days.
        this.setState({
          day_1: days[1],
          day_1_clouds: days[1].clouds, 
          day_1_main: days[1].main,
          day_1_weather: days[1].weather[0],
          day_1_wind: days[1].wind,
          day_2: days[2],
          day_2_clouds: days[2].clouds, 
          day_2_main: days[2].main,
          day_2_weather: days[2].weather[0],
          day_2_wind: days[2].wind,
          day_3: days[3],
          day_3_clouds: days[3].clouds, 
          day_3_main: days[3].main,
          day_3_weather: days[3].weather[0],
          day_3_wind: days[3].wind,
          day_4: days[4],
          day_4_clouds: days[4].clouds, 
          day_4_main: days[4].main,
          day_4_weather: days[4].weather[0],
          day_4_wind: days[4].wind
        });
      }).catch((error) => {
      console.log(error);
      })
    };
  }

  render() {
    return (
      <div className="forecast-container">
        <ForecastSummary state={this.state} />
        <section className="five-day-forecast">
          <section className="row">
          <ForecastNextDays 
            tomorrow = {this.state.day_1}
            clouds = {this.state.day_1_clouds}
            main = {this.state.day_1_main}
            weather = {this.state.day_1_weather}
            wind = {this.state.day_1_wind} />
          <ForecastNextDays 
            state = {this.state.day_2}
            clouds = {this.state.day_2_clouds}
            main = {this.state.day_2_main}
            weather = {this.state.day_2_weather}
            wind = {this.state.day_2_wind} />
          </section>
          <section className="row">
          <ForecastNextDays 
            state = {this.state.day_3}
            clouds = {this.state.day_3_clouds}
            main = {this.state.day_3_main}
            weather = {this.state.day_3_weather}
            wind = {this.state.day_3_wind} />
          <ForecastNextDays 
            state = {this.state.day_4}
            clouds = {this.state.day_4_clouds}
            main = {this.state.day_4_main}
            weather = {this.state.day_4_weather}
            wind = {this.state.day_4_wind} />
          </section>
        </section>
      </div>
    );
  }
}

export default Forecast;