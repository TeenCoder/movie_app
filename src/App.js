import React from 'react';
import axios from 'axios';
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount() {
    this.getMovies();
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