import React, { Component } from 'react';
import Summary from './Summary';

// console.log("Home is working.");

class Home extends Component {
  render() {
    return (
      <div className="home-container"> 
        <section className="home-summary">
          <Summary 
            state={this.props.state.first_city}  
            main={this.props.state.first_city_main} 
            weather={this.props.state.first_city_weather}
          />
          <Summary 
            state={this.props.state.second_city} 
            main={this.props.state.second_city_main} 
            weather={this.props.state.second_city_weather}
          />
        </section>
        <section className="home-summary">
          <Summary 
            state={this.props.state.third_city} 
            main={this.props.state.third_city_main} 
            weather={this.props.state.third_city_weather}
          />
          <Summary 
            state={this.props.state.fourth_city} 
            main={this.props.state.fourth_city_main} 
            weather={this.props.state.fourth_city_weather}
          />
        </section>
        <section className="home-summary">
          <Summary 
            state={this.props.state.fifth_city} 
            main={this.props.state.fifth_city_main} 
            weather={this.props.state.fifth_city_weather}
          />
        </section>
      </div>
    );
  }
}

export default Home;