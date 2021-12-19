import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { Offers } from './views';
import './assets/style/tailwind.css';

ReactDOM.render(
  <Provider store={store}>
    <Offers />
  </Provider>,
  document.getElementById('root'),
);
