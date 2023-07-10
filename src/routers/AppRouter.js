import React from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
  Navigate,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import TrendingPage from '../components/TrendingPage';
import Top100 from '../components/Top100';
import UpcomingPage from '../components/UpcomingPage';
import GenrePage from '../components/GenrePage';
import PrivateRoute from './PrivateRoute';
import MoviesFilters from '../components/MoviesFilters';
import TextSearchMoviesPage from '../components/TextSearchMoviesPage';
import WatchedPage from '../components/WatchedPage';
import WishlistPage from '../components/WishlistPage';
import Details from '../components/Details';
import NotFoundPage from '../components/NotFoundPage';
import { closeModal } from '../actions/modal';
import { addMovies } from '../actions/movies';

const AppRouter = (props) => {
  const getData = (url, i, extra = '') => {
    fetch(
      `${process.env.REACT_APP_TMDB_URL}${url}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${i}${extra}`
    )
      .then((res) => res.json())
      .then((data) => {
        props.dispatch(addMovies(data.results));
      })
      .catch((err) => console.log(err));
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Details
          isOpen={props.isOpen}
          onClose={() => props.dispatch(closeModal())}
          data={props.modalData}
        />
        <Routes>
          <Route
            path='/'
            element={
              <div className='content-container body'>
                <h1 className='page-title'>Trending Movies</h1>
                <MoviesFilters />
                <TrendingPage getData={getData} />
              </div>
            }
            exact={true}
          />
          <Route
            path='/top100'
            element={
              <div className='content-container body'>
                <h1 className='page-title'>THE 100</h1>
                <Top100 getData={getData} />
              </div>
            }
          />
          <Route
            path='/upcoming'
            element={
              <div className='content-container body'>
                <h1 className='page-title'>Upcoming Movies</h1>
                <MoviesFilters />
                <UpcomingPage getData={getData} />
              </div>
            }
          />
          <Route
            path='/genre/:id'
            element={
              <div className='content-container body'>
                <h1 className='page-title'>{props.genre} Movies</h1>
                <MoviesFilters />
                <GenrePage getData={getData} />
              </div>
            }
          />
          <Route
            path='/search/:text'
            element={
              <div className='content-container body'>
                <h1 className='page-title'>Search for: "{props.textFilter}"</h1>
                <MoviesFilters />
                <TextSearchMoviesPage />
              </div>
            }
          />
          <Route
            path='/wishlist'
            element={
              <PrivateRoute>
                <div className='content-container body'>
                  <h1 className='page-title'>Wishlist</h1>
                  <MoviesFilters />
                  <WishlistPage />
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path='/watched'
            element={
              <PrivateRoute>
                <div className='content-container body'>
                  <h1 className='page-title'>Watched Movies</h1>
                  <MoviesFilters />
                  <WatchedPage />
                </div>
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    textFilter: state.filters.text,
    genre: state.genres.genre,
    isOpen: state.modal.isOpen,
    modalData: state.modal.data,
  };
};

export default connect(mapStateToProps)(AppRouter);
