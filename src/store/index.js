import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import cats from './cats';

const reducer = combineReducers({
  cats,
  form: formReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './cats';
