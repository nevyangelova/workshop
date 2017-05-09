import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'

import MovieList from './MovieList';
import store from './store';

import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from './action-types';

function addToFavoriteActionCreator(id) {
  return {
    type: ADD_TO_FAVORITE,
    id,
  };
}

function removeFromFavoriteActionCreator(id) {
  return {
    type: REMOVE_FROM_FAVORITE,
    id,
  };
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveFavorite: (id) => dispatch(removeFromFavoriteActionCreator(id)),
    onAddFavorite: (id) => dispatch(addToFavoriteActionCreator(id)),
  };
}

const MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList)

ReactDOM.render(
  <Provider store={store}>
    <MovieListContainer />
  </Provider>,
  document.getElementById('app')
);
