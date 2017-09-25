import React from 'react';
import { topNMoviesQuery } from '../queries/movies';
import Movies from '../containers/Movies';
import CreateMovie from '../containers/CreateMovie';
import CreateActor from '../containers/CreateActor';
import '../assets/styles/App.css';

const IndexView = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Movies gql={topNMoviesQuery} />
    <CreateMovie />
    <CreateActor />
  </div>
);

export default IndexView;
