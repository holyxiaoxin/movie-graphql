import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../modules/reducers';
import history from './history';
import { apolloClient } from '../../services/apollo';
import DevTools from '../devTools/DevTools';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const historyMiddleware = routerMiddleware(history);

// createStore : enhancer
// NOTE: use now https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    historyMiddleware,
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
