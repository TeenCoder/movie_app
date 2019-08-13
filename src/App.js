import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    console.log("PLUS");
  };
  minus = () => {
    console.log("MINUS");
  };

  render(){
    return (
      <div>
        <h1>the Number is {this.state.count}</h1>
        <button onClick={this.add}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}

export default App;