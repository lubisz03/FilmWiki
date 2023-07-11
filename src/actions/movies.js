import db from '../firebase/firebase';
import { closeModal } from './modal';

// Set movies
export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
});

// Add movies
export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies,
});

// Add Watched Movie
export const addWatchedMovie = (movie) => ({
  type: 'ADD_WATCHED_MOVIE',
  movie,
});

export const startAddWatchedMovie = (movie = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/watched`)
      .push(movie)
      .then((ref) => dispatch(addWatchedMovie({ ...movie, id: ref.key })))
      .then(() => {
        dispatch(closeModal());
      });
  };
};

// Set Watched Movies
export const setWatchedMovies = (movies) => ({
  type: 'SET_WATCHED_MOVIES',
  movies,
});

export const startSetWatchedMovies = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/watched`)
      .once('value')
      .then((snapshot) => {
        const movies = [];

        snapshot.forEach((childSnapshot) => {
          movies.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
          });
        });

        dispatch(setWatchedMovies(movies));
      });
  };
};

// Remove Watched Movie
export const removeWatchedMovie = (movie) => ({
  type: 'REMOVE_WATCHED_MOVIE',
  title: movie.title,
});

export const startRemoveWatchedMovie = (movie) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/watched/${movie.id}`)
      .remove()
      .then(() => {
        dispatch(removeWatchedMovie(movie));
      })
      .then(() => {
        dispatch(closeModal());
      });
  };
};

// Add Wishlisted Movie
export const addWishlistedMovie = (movie) => ({
  type: 'ADD_WISHLISTED_MOVIE',
  movie,
});

export const startAddWishlistedMovie = (movie = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/wishlist`)
      .push(movie)
      .then((ref) => dispatch(addWishlistedMovie({ ...movie, id: ref.key })))
      .then(() => {
        dispatch(closeModal());
      });
  };
};

// Set Wishlisted Movies
export const setWishlistedMovies = (movies) => ({
  type: 'SET_WISHLISTED_MOVIES',
  movies,
});

export const startSetWishlistedMovies = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/wishlist`)
      .once('value')
      .then((snapshot) => {
        const movies = [];

        snapshot.forEach((childSnapshot) => {
          movies.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
          });
        });

        dispatch(setWishlistedMovies(movies));
      });
  };
};

// Remove Wishlisted Movie
export const removeWishlistedMovie = (movie) => ({
  type: 'REMOVE_WISHLISTED_MOVIE',
  title: movie.title,
});

export const startRemoveWishlistedMovie = (movie) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/wishlist/${movie.id}`)
      .remove()
      .then(() => {
        dispatch(removeWishlistedMovie(movie));
      })
      .then(() => {
        dispatch(closeModal());
      });
  };
};
