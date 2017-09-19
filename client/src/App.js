import React from 'react';
import Movies from './containers/Movies';
import CreateMovie from './containers/CreateMovie';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div style={{ display: 'inline-block' }}>
      <Movies />
      <CreateMovie />
    </div>
  </div>
);

export default App;
