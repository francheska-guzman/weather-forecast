import React, { Component } from 'react';

// console.log("FiveDays is working.");

class FiveDays extends Component {
  constructor(){
    super();
    this.dateFormat = this.dateFormat.bind(this);
  }

  dateFormat() {
    console.log(this.props.state);
    
    if (this.props.state.dt_txt !== undefined) {
      var date = this.props.state.dt_txt.split(' ')[0]; 
      var dayOfWeek = new Date(date).getDay();      

      // Show day of the week instead of YYYY-MM-DD format.
      return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
  }

  render() {
    return (
      <div className="five-days-container">
        <h5>{this.dateFormat()}</h5>
      </div> 
    );
  }
}

export default FiveDays;