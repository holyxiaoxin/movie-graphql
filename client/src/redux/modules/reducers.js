import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { apolloClient } from '../../services/apollo';

const reducers = combineReducers({
  apollo: apolloClient.reducer(), // apollo reducer
  routing: routerReducer,
});

export default reducers;
