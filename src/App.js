import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
//import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=date_added"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          movies.map(movie => (
            <div className="movies">
              {
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              }
            </div>
          ))
        )}
      </section>
    );
  }
}

export default App;
