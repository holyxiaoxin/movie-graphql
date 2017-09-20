import React from 'react';
import Movies from './containers/Movies';
import CreateMovie from './containers/CreateMovie';
import CreateActor from './containers/CreateActor';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Apollo</h2>
    </div>
    <div style={{ display: 'inline-block' }}>
      <Movies />
      <CreateMovie />
      <CreateActor />
    </div>
  </div>
);

export default App;
