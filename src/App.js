import React from 'react';
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render(){
    const { isLoading } = this.state;
    return (
      <div>
        <h1>
          {isLoading ? "Loading" : "Standby."}
        </h1>
      </div>
    )
  }
}

export default App;