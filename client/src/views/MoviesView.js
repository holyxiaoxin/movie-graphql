import React from 'react';
import Movies from '../containers/Movies';
import { moviesQuery } from '../queries/movies';
import '../assets/styles/App.css';

const MoviesView = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Movies gql={moviesQuery} />
  </div>
);

export default MoviesView;
