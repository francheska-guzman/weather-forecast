import React, { Component } from 'react';
import HomeSummary from './HomeSummary';

// console.log("Home is working.");

class Home extends Component {
  render() {
    return (
      <div className="home-container"> 
        <section className="home-summary">
          <HomeSummary 
            name={this.props.state.first_city.name}  
            temp={this.props.state.first_city_main.temp} 
            weather={this.props.state.first_city_weather.description}
            id={this.props.state.first_city_weather.id}
          />
          <HomeSummary 
            name={this.props.state.second_city.name} 
            temp={this.props.state.second_city_main.temp} 
            weather={this.props.state.second_city_weather.description}
            id={this.props.state.second_city_weather.id}
          />
        </section>
        <section className="home-summary">
          <HomeSummary 
            name={this.props.state.third_city.name} 
            temp={this.props.state.third_city_main.temp} 
            weather={this.props.state.third_city_weather.description}
            id={this.props.state.third_city_weather.id}
          />
          <HomeSummary 
            name={this.props.state.fourth_city.name} 
            temp={this.props.state.fourth_city_main.temp} 
            weather={this.props.state.fourth_city_weather.description}
            id={this.props.state.fourth_city_weather.id}
          />
        </section>
        <section className="home-summary">
          <HomeSummary 
            name={this.props.state.fifth_city.name} 
            temp={this.props.state.fifth_city_main.temp} 
            weather={this.props.state.fifth_city_weather.description}
            id={this.props.state.fifth_city_weather.id}
          />
        </section>
      </div>
    );
  }
}

export default Home;