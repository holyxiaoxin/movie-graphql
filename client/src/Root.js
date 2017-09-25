import React from 'react';
import { Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import AppHeader from './components/AppHeader';
import App from './App';
import client from './services/apollo';
import configureStore from './redux/store/configureStore';
import history from './redux/store/history';
import DevTools from './redux/devTools/DevTools';

import CreateMovie from './containers/CreateMovie';

const store = configureStore();

const AppWithDevTools = () =>
  (
    <div>
      <ConnectedRouter history={history}>
        <div>
          <AppHeader />
          <Route exact path="/" component={App} />
          <Route exact path="/movies" component={App} />
          <Route path="/movies/new" component={CreateMovie} />
        </div>
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
