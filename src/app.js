import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import { ChakraProvider } from '@chakra-ui/react';
import { startSetWishlistedMovies } from './actions/wishlistedMovies';
import { startSetWatchedMovies } from './actions/watchedMovies';

const store = configureStore();
const history = createBrowserHistory();

const jsx = (
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetWishlistedMovies());
    store.dispatch(startSetWatchedMovies());
    root.render(jsx);
    history.push('/');
  } else {
    store.dispatch(logout());
    root.render(jsx);
    history.push('/');
  }
});
