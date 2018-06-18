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
      day_2_max: null,
      day_2_min: null,
      day_3: [],
      day_3_main: [],
      day_3_weather: [],
      day_3_wind: [],
      day_3_max: null,
      day_3_min: null,
      day_4: [],
      day_4_main: [],
      day_4_weather: [],
      day_4_wind: [],
      day_4_max: null,
      day_4_min: null,
      day_5: [],
      day_5_main: [],
      day_5_weather: [],
      day_5_wind: [],
      day_5_max: null,
      day_5_min: null,    
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
  }

  componentDidMount() {
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

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd < 10){
            dd = '0' + dd;
        } 
        if(mm < 10){
            mm = '0' + mm;
        } 
        var yearMonthDay = yyyy+'-'+mm+'-'+dd;
        // console.log(yearMonthDay);

        var days = [];

        for(var i = 0; i < data.list.length; i += 1) {
          if(data.list[i].dt_txt.split(' ')[0] !== yearMonthDay && data.list[i].dt_txt.split(' ')[1] === "00:00:00") {
            // console.log(data.list[i])
            days.push(data.list[i]);
          }
        }

        console.log(days);

        var temp_max = [];
        var temp_min = [];

        for(var m = 0; m < data.list.length; m += 1) {
          if(data.list[m].dt_txt.split(' ')[0] !== yearMonthDay) {
            temp_max.push(data.list[m].main.temp_max);
            temp_min.push(data.list[m].main.temp_min);    
          }
        }
      
        // console.log(temp_max);
        // console.log(temp_min);

        /* 
        Comparing the max and min temperature from different moments of each day.
        00:00:00, 03:00:00, 06:00:00, 09:00:00, 12:00:00, 15:00:00, 18:00:00, 21:00:00
        */
        var maxD2 = Math.max(temp_max[0], temp_max[1], temp_max[2], temp_max[3], temp_max[4], temp_max[5], temp_max[6], temp_max[7]);
        var minD2 = Math.min(temp_max[0], temp_max[1], temp_max[2], temp_max[3], temp_max[4], temp_max[5], temp_max[6], temp_max[7]);
        // console.log("Max: " + maxD2 + " and Min: " + minD2);
        var maxD3 = Math.max(temp_max[8], temp_max[9], temp_max[10], temp_max[11], temp_max[12], temp_max[13], temp_max[14], temp_max[15]);
        var minD3 = Math.min(temp_max[8], temp_max[9], temp_max[10], temp_max[11], temp_max[12], temp_max[13], temp_max[14], temp_max[15]);
        // console.log("Max: " + maxD3 + " and Min: " + minD3);
        var maxD4 = Math.max(temp_max[16], temp_max[17], temp_max[18], temp_max[19], temp_max[20], temp_max[21], temp_max[22], temp_max[23]);
        var minD4 = Math.min(temp_max[16], temp_max[17], temp_max[18], temp_max[19], temp_max[20], temp_max[21], temp_max[22], temp_max[23]);
        // console.log("Max: " + maxD4 + " and Min: " + minD4);
        var maxD5 = Math.max(temp_max[24], temp_max[25], temp_max[26], temp_max[27], temp_max[28], temp_max[29], temp_max[30], temp_max[31]);
        var minD5 = Math.min(temp_max[24], temp_max[25], temp_max[26], temp_max[27], temp_max[28], temp_max[29], temp_max[30], temp_max[31]);
        // console.log("Max: " + maxD5 + " and Min: " + minD5);

        // Saving the next four days.
        this.setState({
          day_2: days[0],
          day_2_main: days[0].main,
          day_2_weather: days[0].weather[0],
          day_2_wind: days[0].wind,
          day_2_max: maxD2,
          day_2_min: minD2,
          day_3: days[1],
          day_3_main: days[1].main,
          day_3_weather: days[1].weather[0],
          day_3_wind: days[1].wind,
          day_3_max: maxD3,
          day_3_min: minD3,
          day_4: days[2],
          day_4_main: days[2].main,
          day_4_weather: days[2].weather[0],
          day_4_wind: days[2].wind,
          day_4_max: maxD4,
          day_4_min: minD4,
          day_5: days[3],
          day_5_main: days[3].main,
          day_5_weather: days[3].weather[0],
          day_5_wind: days[3].wind,
          day_5_max: maxD5,
          day_5_min: minD5,
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
            tomorrow = {this.state.day_2}
            main = {this.state.day_2_main}
            weather = {this.state.day_2_weather}
            wind = {this.state.day_2_wind}
            max = {this.state.day_2_max}
            min = {this.state.day_2_min} />
          <ForecastNextDays 
            state = {this.state.day_3}
            main = {this.state.day_3_main}
            weather = {this.state.day_3_weather}
            wind = {this.state.day_3_wind}
            max = {this.state.day_3_max}
            min = {this.state.day_3_min} />
          </section>
          <section className="row">
          <ForecastNextDays 
            state = {this.state.day_4}
            main = {this.state.day_4_main}
            weather = {this.state.day_4_weather}
            wind = {this.state.day_4_wind}
            max = {this.state.day_4_max}
            min = {this.state.day_4_min} />
          <ForecastNextDays 
            state = {this.state.day_5}
            main = {this.state.day_5_main}
            weather = {this.state.day_5_weather}
            wind = {this.state.day_5_wind}
            max = {this.state.day_5_max}
            min = {this.state.day_5_min} />
          </section>
        </section>
      </div>
    );
  }
}

export default Forecast;