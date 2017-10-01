import React from 'react';
import MoviesWithCursor from '../containers/MoviesWithCursor';
import { moviesQueryCursor } from '../queries/movies';
import '../assets/styles/App.css';

const MoviesView = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <MoviesWithCursor gql={moviesQueryCursor} limit={5} />
  </div>
);

export default MoviesView;
