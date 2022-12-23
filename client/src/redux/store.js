import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer.js';
import thunk from 'redux-thunk';

const composeEnhancers =
  (typeof window !== 'undefinded' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;