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
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  startSetWishlistedMovies,
  startSetWatchedMovies,
} from './actions/movies';
import { Fonts } from './fonts/Fonts';

const store = configureStore();
const history = createBrowserHistory();

const theme = extendTheme({
  fonts: {
    heading: 'Bitter',
    body: 'Bitter',
    footer: 'Bitter',
  },
});

const jsx = (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ChakraProvider>
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
