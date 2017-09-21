import { combineReducers } from 'redux';
import { apolloClient } from '../../services/apollo';

const reducers = combineReducers({
  apollo: apolloClient.reducer(), // apollo reducer
});

export default reducers;
