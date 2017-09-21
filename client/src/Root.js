import React from 'react';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import client from './services/apollo';
import configureStore from './redux/store/configureStore';
import DevTools from './redux/devTools/DevTools';

const store = configureStore();

const AppWithDevTools = () =>
  (
    <div>
      <App />
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
