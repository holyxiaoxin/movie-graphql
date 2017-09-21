// @flow weak

import {
  createStore,
  // combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../modules/reducers';
import { apolloClient } from '../../services/apollo';
import DevTools from '../devTools/DevTools';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

// createStore : enhancer
// NOTE: use now https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    apolloClient.middleware(), // apollo middleware
    loggerMiddleware,
  ),
  DevTools.instrument(),
);

// export default = "redux store"
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
