import db from '../firebase/firebase';
import { closeModal } from './modal';

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
