import React from 'react';

class MovieListItem extends React.Component {
  shouldComponentUpdate(props) {
    if (this.props.movie === props.movie) return false;

    return true;
  }

  render() {
    const { movie, onRemoveFavorite, onAddFavorite } = this.props;

    let handler;
    if (movie.isFavorite) {
      handler = onRemoveFavorite;
    } else {
      handler = onAddFavorite;
    }

    return (
      <div
        key={movie.id}
        className="movie"
        onClick={handler}
      >
        {movie.name} ({movie.year})
      </div>
    );
  }
}

MovieListItem.propTypes = {
  movie: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    year: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  }).isRequired,
  onRemoveFavorite: React.PropTypes.func.isRequired,
  onAddFavorite: React.PropTypes.func.isRequired,
};

export default class MovieList extends React.Component {
  render() {
    const { movies, onAddFavorite, onRemoveFavorite } = this.props;

    const movieListFavoriteItems = movies
            .filter((movie) => movie.isFavorite)
            .map((movie) => (
              <MovieListItem
                key={movie.id}
                movie={movie}
                onRemoveFavorite={() => onRemoveFavorite(movie.id)}
                onAddFavorite={() => onAddFavorite(movie.id)}
              />));

    const movieListItems = movies
            .filter((movie) => !movie.isFavorite)
            .map((movie) => (
              <MovieListItem
                key={movie.id}
                movie={movie}
                onRemoveFavorite={() => onRemoveFavorite(movie.id)}
                onAddFavorite={() => onAddFavorite(movie.id)}
              />));

    return (
      <div id="movies">
        <h3 id="favorites-header">Favorites</h3>
        {movieListFavoriteItems}
        <h3 id="other-header">Other</h3>
        {movieListItems}
        <br />
      </div>
    );
  }
}
