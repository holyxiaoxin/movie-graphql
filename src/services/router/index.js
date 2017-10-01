import React from 'react';
import { Route } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import MoviesView from '../../views/MoviesView';
import IndexView from '../../views/IndexView';
import CreateMovieView from '../../views/CreateMovieView';

const Routes = () =>
  (
    <div>
      <AppHeader />
      <Route exact path="/" component={IndexView} />
      <Route exact path="/movies" component={MoviesView} />
      <Route path="/movies/new" component={CreateMovieView} />
    </div>
  );

export default Routes;
