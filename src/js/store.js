import { combineReducers, createStore } from 'redux';

import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from './action-types';

function getInitialState() {
  return {
    movies: [
      { id: 1, isFavorite: false, name: 'Pi', year: '1999' },
      { id: 2, isFavorite: false, name: 'Heat', year: '1995' },
      { id: 3, isFavorite: false, name: 'Shrek', year: '2001' },
      { id: 4, isFavorite: true, name: 'Armageddon', year: '1998' },
    ],
  };
}

function moviesReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return state.map((movie) => {
      if (movie.id === action.id) {
        return Object.assign({}, movie, {
          isFavorite: true,
        });
      } else {
        return movie;
      }
    })

    case REMOVE_FROM_FAVORITE:
      return state.map((movie) => {
      if (movie.id === action.id) {
        return Object.assign({}, movie, {
          isFavorite: false,
        });
      } else {
        return movie;
      }
    });

    default:
      return state;
  }
}

// =============================================================================
// Reducers

export default createStore(
  combineReducers({
    movies: moviesReducer
  }),
  getInitialState()
);
