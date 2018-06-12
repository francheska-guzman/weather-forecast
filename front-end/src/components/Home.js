import React, { Component } from 'react';
import Summary from './Summary';

//console.log("Home is working.");

class Home extends Component {
  render() {
    return (
      <div className="home-container"> 
        <Summary state={this.props.state.first_city} />
        <Summary state={this.props.state.second_city} />
        <Summary state={this.props.state.third_city} />
        <Summary state={this.props.state.fourth_city} />
        <Summary state={this.props.state.fifth_city} />
      </div>
    );
  }
}

export default Home;