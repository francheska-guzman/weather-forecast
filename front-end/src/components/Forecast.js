import React, { Component } from 'react';
import ForecastSummary from './ForecastSummary';
import ForecastNextDays from './ForecastNextDays';

// console.log("Forecast is working.");

class Forecast extends Component {
  constructor(){
    super();
    this.state = {
      day_1_city: [],
      day_1_coord: [],
      day_1_main: [],
      day_1_sys: [],
      day_1_weather: [],
      day_1_wind: [],
      day_2: [],
      day_2_main: [],
      day_2_weather: [],
      day_2_wind: [],
      day_3: [],
      day_3_main: [],
      day_3_weather: [],
      day_3_wind: [],
      day_4: [],
      day_4_main: [],
      day_4_weather: [],
      day_4_wind: [],
      day_5: [],
      day_5_main: [],
      day_5_weather: [],
      day_5_wind: []    
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
            day_1_city: this.props.state.first_city,
            day_1_coord:this.props.state.first_city_coord,
            day_1_main: this.props.state.first_city_main,
            day_1_sys: this.props.state.first_city_sys,
            day_1_weather: this.props.state.first_city_weather,
            day_1_wind: this.props.state.first_city_wind
          })
        }
        else if (city === this.props.state.second_city.name) {
          this.setState({
            day_1_city: this.props.state.second_city,
            day_1_coord:this.props.state.second_city_coord,
            day_1_main: this.props.state.second_city_main,
            day_1_sys: this.props.state.second_city_sys,
            day_1_weather: this.props.state.second_city_weather,
            day_1_wind: this.props.state.second_city_wind
          })
        }
        else if (city === this.props.state.third_city.name) {
          this.setState({
            day_1_city: this.props.state.third_city,
            day_1_coord:this.props.state.third_city_coord,
            day_1_main: this.props.state.third_city_main,
            day_1_sys: this.props.state.third_city_sys,
            day_1_weather: this.props.state.third_city_weather,
            day_1_wind: this.props.state.third_city_wind
          })
        }
        else if (city === this.props.state.fourth_city.name) {
          this.setState({
            day_1_city: this.props.state.fourth_city,
            day_1_coord:this.props.state.fourth_city_coord,
            day_1_main: this.props.state.fourth_city_main,
            day_1_sys: this.props.state.fourth_city_sys,
            day_1_weather: this.props.state.fourth_city_weather,
            day_1_wind: this.props.state.fourth_city_wind
          })
        }
        else {
          this.setState({
            day_1_city: this.props.state.fifth_city,
            day_1_coord: this.props.state.fifth_city_coord,
            day_1_main: this.props.state.fifth_city_main,
            day_1_sys: this.props.state.fifth_city_sys,
            day_1_weather: this.props.state.fifth_city_weather,
            day_1_wind: this.props.state.fifth_city_wind
          })
        }
      }
    // console.log(this.state);
  }

  componentDidMount() {
    // console.log(this.state);
    var days = [];

    if (this.state.day_1_city.id !== undefined) {
      var api = 'https://api.openweathermap.org/data/2.5/forecast';
      var cityId = "?id=" + this.state.day_1_city.id;
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
          if(data.list[i].dt_txt.split(' ')[1] === "21:00:00") {
            days.push(data.list[i]);
            // console.log(days);
          }
        }
        // Saving the next four days.
        this.setState({
          day_2: days[1],
          day_2_main: days[1].main,
          day_2_weather: days[1].weather[0],
          day_2_wind: days[1].wind,
          day_3: days[2],
          day_3_main: days[2].main,
          day_3_weather: days[2].weather[0],
          day_3_wind: days[2].wind,
          day_4: days[3],
          day_4_main: days[3].main,
          day_4_weather: days[3].weather[0],
          day_4_wind: days[3].wind,
          day_5: days[4],
          day_5_main: days[4].main,
          day_5_weather: days[4].weather[0],
          day_5_wind: days[4].wind
        });
        // console.log(days[4]);
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
            tomorrow = {this.state.day_2}
            main = {this.state.day_2_main}
            weather = {this.state.day_2_weather}
            wind = {this.state.day_2_wind} />
          <ForecastNextDays 
            state = {this.state.day_3}
            main = {this.state.day_3_main}
            weather = {this.state.day_3_weather}
            wind = {this.state.day_3_wind} />
          </section>
          <section className="row">
          <ForecastNextDays 
            state = {this.state.day_4}
            main = {this.state.day_4_main}
            weather = {this.state.day_4_weather}
            wind = {this.state.day_4_wind} />
          <ForecastNextDays 
            state = {this.state.day_5}
            main = {this.state.day_5_main}
            weather = {this.state.day_5_weather}
            wind = {this.state.day_5_wind} />
          </section>
        </section>
      </div>
    );
  }
}

export default Forecast;