import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore() {
  const middlewares = [
    reduxInmutableStateInvariant(),
    thunk
  ];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
}
