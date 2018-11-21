import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './Components/App/App';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

// store
//   .dispatch(makeSandwichesForEverybody())
//   .then(() =>
//     response.send(ReactDOMServer.renderToString(<MyApp store={store} />))
//   );
