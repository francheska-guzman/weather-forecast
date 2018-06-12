import React, { Component } from 'react';

//console.log("Summary is working.");

class Summary extends Component {
  render() {
    return (
      <div className="summary-container"> 
        <h1>{this.props.state.name}</h1>
      </div>
    );
  }
}

export default Summary;