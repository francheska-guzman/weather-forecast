import React, { Component } from 'react';

console.log("Summary is working.");

class Summary extends Component {
  render() {
    return (
      <section className="summary-container"> 
        <h2>{this.props.state.name}</h2>
        <h3>{this.props.weather.description}</h3>
        <div className="flex">
          <div className="row-column">
          </div>
          <div className="row-column">
            <h4>{this.props.main.temp} <sup className="summary-units">°F</sup></h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Summary;