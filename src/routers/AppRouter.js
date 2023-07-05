import React from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
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
import { closeModal } from '../actions/modal';

const AppRouter = (props) => (
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
              <TrendingPage />
            </div>
          }
          exact={true}
        />
        <Route
          path='/top100'
          element={
            <div className='content-container body'>
              <h1 className='page-title'>THE 100</h1>
              <Top100 />
            </div>
          }
        />
        <Route
          path='/upcoming'
          element={
            <div className='content-container body'>
              <h1 className='page-title'>Upcoming Movies</h1>
              <MoviesFilters />
              <UpcomingPage />
            </div>
          }
        />
        <Route
          path='/genre/:id'
          element={
            <div className='content-container body'>
              <h1 className='page-title'>{props.genre} Movies</h1>
              <MoviesFilters />
              <GenrePage />
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
      </Routes>
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    textFilter: state.filters.text,
    genre: state.filters.genre,
    isOpen: state.modal.isOpen,
    modalData: state.modal.data,
  };
};

export default connect(mapStateToProps)(AppRouter);
