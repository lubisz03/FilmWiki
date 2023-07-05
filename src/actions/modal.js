// OPEN MODEL
export const openModal = (movie, watched, wishlisted) => ({
  type: 'OPEN_MODAL',
  movie,
  watched,
  wishlisted,
});

export const startOpenModal = (movie) => {
  return (dispatch, getState) => {
    const watchedMovies = getState().watchedMovies;
    const wishlistedMovies = getState().wishlistedMovies;

    let watchedTitles = [];
    let wishlistedTitles = [];

    watchedMovies.map((movie) => {
      watchedTitles.push(movie.title);
    });
    wishlistedMovies.map((movie) => {
      wishlistedTitles.push(movie.title);
    });

    const watched = watchedTitles.includes(movie.title);
    const wishlisted = wishlistedTitles.includes(movie.title);

    dispatch(openModal(movie, watched, wishlisted));
  };
};

// CLOSE MODAL
export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
