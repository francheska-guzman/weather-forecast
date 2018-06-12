import React, { Component } from 'react';

//console.log("Summary is working.");

class Summary extends Component {
  render() {
    return (
      <div className="summary-container"> 
        <h2>{this.props.state.name}</h2>
      </div>
    );
  }
}

export default Summary;