// Get visible movies
const getVisibleMovies = (movies, { sortBy }) => {
  return movies
    .filter((movie) => {
      return movie;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return a.vote_average < b.vote_average ? 1 : -1;
      } else if (sortBy === 'popularity') {
        return a.popularity < b.popularity ? 1 : -1;
      } else if (sortBy === 'alphabet') {
        return a.title[0] > b.title[0] ? 1 : -1;
      }
    });
};

export default getVisibleMovies;
