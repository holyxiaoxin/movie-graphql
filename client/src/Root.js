import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import client from './services/apollo';
import configureStore from './redux/store/configureStore';
import history from './redux/store/history';
import DevTools from './redux/devTools/DevTools';
import Routes from './services/router';

const store = configureStore();

const AppWithDevTools = () =>
  (
    <div>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
      <DevTools />
    </div>
  );

const Root = () =>
  (
    <ApolloProvider store={store} client={client}>
      <AppWithDevTools />
    </ApolloProvider>
  );

export default Root;
