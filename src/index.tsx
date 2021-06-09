import React from 'react';
import ReactDOM from 'react-dom';

// router
import { Routes } from './routes';

// redux
import { Provider } from 'react-redux';
import { store } from './store/index';

// asset
import './assets/style/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
