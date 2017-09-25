import React from 'react';
import Movies from './containers/Movies';
import CreateMovie from './containers/CreateMovie';
import CreateActor from './containers/CreateActor';
import './assets/styles/App.css';

const App = () => (
  <div>
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Movies />
      <CreateMovie />
      <CreateActor />
    </div>
  </div>
);

export default App;
