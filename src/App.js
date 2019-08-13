import React from 'react';
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({count: current.count + 1}));
    console.log("PLUS");
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
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