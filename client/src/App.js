import React from 'react';
import Movies from './containers/Movies';
import CreateMovie from './containers/CreateMovie';
import CreateActor from './containers/CreateActor';
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="App-header" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
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
