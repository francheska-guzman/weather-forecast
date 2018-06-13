import React, { Component } from 'react';

// console.log("Header is working.");

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Weather Forecast</h1>
        {/* Reusing the Summary component to display the summary of each city. */}
      </header>
    );
  }
}

export default Header;