import db from '../firebase/firebase';
import { closeModal } from './modal';

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
