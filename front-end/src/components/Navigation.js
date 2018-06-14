import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// console.log("Navigation is working.");

class Navigation extends Component {
  render() {
    return (
      <nav>
        <li className="navigation-link">
        <NavLink to="/weather-forecast">⬅</NavLink></li>
      </nav>
    );
  }
}

export default Navigation;