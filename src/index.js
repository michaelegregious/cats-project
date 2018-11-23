import * as serviceWorker from './serviceWorker';
// import { Router } from 'react-router-dom';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import React from 'react';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// See react docs
serviceWorker.unregister();
