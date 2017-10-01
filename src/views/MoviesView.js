import React from 'react';
import Movies from '../containers/Movies';
import { moviesQueryOffset } from '../queries/movies';
import '../assets/styles/App.css';

const MoviesView = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Movies gql={moviesQueryOffset} offset={0} limit={5} />
  </div>
);

export default MoviesView;
