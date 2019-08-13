import React from 'react';
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount(){
    console.log("Im renderED.");
  }

  componentDidUpdate(){
    console.log("Im UPDATED!!!");
  }

  render(){
    console.log("Im renderING.");
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