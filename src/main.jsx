import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { persistor, store } from './Redux/Store/Store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Jacquard24 from './../src/assets/fonts/Jacquard24-Regular.ttf';

// const Jacquard = {
//   fontFamily: 'Jacquard24',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Jacquard24'),
//     url(${Jacquard24}) format('ttf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F1E17',
    },
    secondary: {
      main: '#878680',
    },
    success: {
      main: '#4BAF47',
    },
    warning: {
      main: '#EEC044',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F7F0',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'Kanit-Regular'].join(','), // Corrected font family declaration
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Kanit-Regular';
          font-style: normal;
          font-display: swap;
          src: local('Kanit-Regular'), local('Kanit-Regular'), url(${Jacquard24}) format('woff2');
        },
        @font-face {
          font-family: 'Kanit-Light';
          font-style: normal;
          font-display: swap;
          src: local('Kanit-Light'), local('Kanit-Light'), url(${Jacquard24}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
        @font-face {
          font-family: 'Kanit-Bold';
          font-style: normal;
          font-display: swap;
          src: local('Kanit-Bold'), local('Kanit-Bold'), url(${Jacquard24}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },          
      `,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
